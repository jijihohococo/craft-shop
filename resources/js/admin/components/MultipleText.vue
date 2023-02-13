<template>
	<template v-for="(data , index ) in input">
	<div class="row mb-3 mt-3">
		<div class="col-8">
			<input type="text" :id="'text-'+index" class="form-control" v-model="input[index]" >
		</div>
		<div class="col-4">
			<a v-show="input.length>1 && index > 0 " class="btn btn-danger" @click="remove(index)" >
				Remove
			</a>
		</div>
	</div>
	<div class="row mb-3 mt-3">
		<div class="col-8">
			<input type="text" :id="'text-one-'+index" class="form-control" v-model="inputOne[index]" >
		</div>
	</div>
	<a class="btn btn-success" @click="add()" >
		Add
	</a>
</template>
</template>
<script >
	export default {
		data(){
			return {
				input : [ '' ] ,
				inputOne : [ '' ]
			}
		},
		watch : {
			inputData : {
				deep : true,
				handler(newValue,oldValue){
					this.input=this.$props.inputData;
				}
			},
			inputOneData : {
				deep : true,
				handler(newValue,oldValue){
					this.inputOne=this.$props.inputOneData;
				}
			}
		},
		props : {
			inputData : {
				type : Array ,
			},
			inputOneData : {
				type : Array
			}
		},
		mounted : function(){
			this.$props.inputData.map((data,index)=>{
				document.getElementById('text-'+index).value=data
				this.input[index]=data;
			})
			this.$props.inputOneData.map((data,index)=>{
				document.getElementById('text-one-'+index).value=data
				this.inputOneData[index]=data;
			})
		},
		methods : {
			add(){
				this.input.push('')
				this.inputOne.push('')
			},
			remove(index){
				this.input.splice(index, 1);
				this.inputOne.splice(index,1);
			}
		}
	}
</script>