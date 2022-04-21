<template>
	<div class="row mb-3" v-for="data in input">
		<div class="col-4">
			<input type="text" class="form-control" :value="data.attribute">
		</div>
		<div class="col-4">
			<input type="text" class="form-control" :value="data.attribute_set">
		</div>
		<!-- <a v-show="input.length>1" class="btn btn-danger" >
			Remove
		</a> -->
		<br>
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
		//emits : ['appendData','removeData'],
		props : {
			inputData : {
				type : Array ,
			}
		},
		created() {
			this.input=this.$props.inputData
		},
		methods : {
			add(){
				let newValue={
					'attribute' : '',
					'attribute_set' : ''
				}
				this.input.push(newValue)
				//this.$emit( 'appendData' , newValue );
			},
			remove(){

			}
		}
	}
</script>