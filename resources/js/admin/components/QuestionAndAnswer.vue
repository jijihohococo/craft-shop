<template>
	<div class="row mb-3" v-for="(data , index ) in question">
		<div class="col-8">
			<div class="form-group">
				<input type="text" placeholder="Question" 
				:id="'question-'+index" 
				class="form-control" v-model="question[index]" >
			</div>
			<div class="form-group">
				<textarea class="form-control" placeholder="Answer" 
				:id="'answer-'+index" 
				v-model="answer[index]">
			</textarea>
		</div>
	</div>
	<div class="col-4">
		<a v-show="question.length>1 && index > 0 " class="btn btn-danger" @click="remove(index)" >
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
				question : [ '' ] ,
				answer : ['']
			}
		},
		watch : {
			questionData : {
				deep : true,
				handler(newValue,oldValue){
					this.question=this.$props.questionData;
				}
			},
			answerData : {
				deep : true,
				handler(newValue,oldValue){
					this.answer=this.$props.answerData;
				}
			},
		},
		props : {
			questionData : {
				type : Array ,
			},
			answerData : {
				type : Array
			}
		},
		mounted : function(){
			this.$props.questionData.map((data,index)=>{
				document.getElementById('question-'+index).value=data
				this.question[index]=data;
			})
			this.$props.answerData.map((data,index)=>{
				document.getElementById('answer-'+index).value=data
				this.answer[index]=data;
			})
		},
		methods : {
			add(){
				this.question.push('')
				this.answer.push('')
			},
			remove(index){
				this.question.splice(index, 1);
				this.answer.splice(index,1);
			}
		}
	}
</script>