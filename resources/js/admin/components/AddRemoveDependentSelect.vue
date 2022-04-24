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
			<SelectMultiple :value="data.selectedSubData" :index="index" @input="setSubMultipleSelect" >
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
					this.main=this.$props.mainData;
				}
			}
		},
		props : ['mainData','selectData'],
		methods : {
			setSubMultipleSelect(object){
				let main=this.main[object.index];
				main.subSelectData=object.value;
			},
			setSubSelect(object){
				let main=this.main[object.index];
				main.id=object.value;
				window.axios.get('get_attribute_sets/'+object.value).then( (response) => {
				main.subSelectData=response.data.sets
				}).catch( (error) => {

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