<template>
	<div class="row mb-3" v-for="(data , index ) in input">
		<div class="col-8">
			<input type="text" :id="'text-'+index" class="form-control" v-model="input[index]" >
		</div>
		<div class="col-4">
			<a v-show="input.length>1 && index > 0 " class="btn btn-danger" @click="remove(index)" >
				Remove
			</a>
		</div>
	</div>
	<a class="btn btn-success" @click="add()" >
		Add
	</a>
</template>
<script >
	export default {
		data(){
			return {
				input : [ '' ] ,
			}
		},
		watch : {
			inputData : {
				deep : true,
				handler(newValue,oldValue){
					this.input=this.$props.inputData;
				}
			}
		},
		props : {
			inputData : {
				type : Array ,
			}
		},
		mounted : function(){
			this.$props.inputData.map((data,index)=>{
				document.getElementById('text-'+index).value=data
				this.input[index]=data;
			})
		},
		methods : {
			add(){
				this.input.push('')
			},
			remove(index){
				this.input.splice(index, 1);
			}
		}
	}
</script>