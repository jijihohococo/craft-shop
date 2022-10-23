<template>
	<component is="style">
		.select2-selection__choice{
			background-color: #800080 !important;
			color : white !important;
		}
	</component>
	<div class="row mb-3" v-for="(data , index ) in main">
		<div class="col-4">
			<Select :value="data.id" :index="index" @input="setSubSelect" >
				<option value="" disabled >Select Attribute</option>
				<option v-for="select in selectData" :value="select.id">{{ select.name }}</option>
			</Select>
		</div>
		<div class="col-4">
			<SelectMultiple
			:placeholder="placeholder"
			:value="data.selectedSubData" :index="index" @input="setSubMultipleSelect" >
				<option :value="subSelect.id" v-for="subSelect in data.subSelectData">{{ subSelect.set }}</option>
			</SelectMultiple>
		</div>
		<div class="col-4">
			<a v-show="main.length>1 && index > 0 " class="btn btn-danger" @click="remove(index)" >
				Remove
			</a>
		</div>
	</div>
	<a class="btn btn-success" @click="add()" >
		Add
	</a>
</template>
<script >
	import Select from './Select';
	import SelectMultiple from './SelectMultiple';
	import { errorResponse  } from '../helpers/check';
	import { showSwalLoading } from  '../../helpers/general'

	export default {
		components: {
			Select,
			SelectMultiple
		},
		data(){
			return {
				main : [ {
					'id' : '' ,
					'subSelectData' : [] ,
					'selectedSubData' : []
				} ] ,

			}
		},
		watch : {
			mainData : {
				deep : true,
				handler(newValue,oldValue){
					let mainData=newValue;
					this.main=[];
					newValue.map( (data,index) => {
						window.axios.get('get_attribute_sets/'+data.attribute_id).then( (response) => {
							window.axios.get('get_item_attribute_sets/'+data.id).then( (newResponse) => {
								this.main.push({
									'id' : data.attribute_id ,
									'subSelectData' : response.data.sets ,
									'selectedSubData' : newResponse.data.selectedSets
								})
							} ).catch( (newError) => {
								errorResponse(newError,this,'read')
							} )
						} ).catch( (error) => {
							errorResponse(error,this,'read')
						} )
					} )
				}
			}
		},
		props : ['mainData','selectData','placeholder'],
		methods : {
			setSubMultipleSelect(object){
				let main=this.main[object.index];
				if(main!==undefined){
					main.selectedSubData=object.value;
				}
				//
			},
			setSubSelect(object){
				let main=this.main[object.index];
				main.id=object.value;
				main.selectedSubData=[]
				main.subSelectData=[]
				window.axios.get('get_attribute_sets/'+object.value).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						main.subSelectData=response.data.sets
					}
				}).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
			add(){
				this.main.push({
					'id' : '',
					'subSelectData' : [],
					'selectedSubData' : []
				})
			},
			remove(index){
				this.main.splice(index, 1);
			}
		}
	}
</script>