<template>
	<ContentHeader 
	:header="'Update '+main_content" 
	:back_links="[
	{ 'route' : '/admin/faq' , 'title' : main_content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions.update==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions.update"  @submit.prevent="updateQuans()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Answers & Questions</label>
									<QuestionAndAnswer
									:questionData="fields.questions"
									:answerData="fields.answers"
									ref="qans" />
								</div>
							</div>
						</div>
					</div>
					<div class="card-footer">
						<button type="submit" class="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>
<script >

	import ContentHeader from '../components/ContentHeader';

	import { errorResponse , checkContentPermission } from '../helpers/check';

	import { showSwalLoading } from  '../../helpers/general'

	import Error from '../components/Error'

	import QuestionAndAnswer from '../components/QuestionAndAnswer'

	import { mixin } from '../common/'
	
	export default {
		components: {
			ContentHeader,
			Error,
			QuestionAndAnswer
		},
		mixins: [mixin],
		data(){
			return {
				main_content : 'FAQ',
				content : 'Faq',
				return_link : 'faq',
				fields : {
					questions : [],
					answers : []
				},
				formData : new FormData
			}
		},
		async created(){
			checkContentPermission(this.content,'update',this);
			await this.getFaqData();
		},
		methods : {
			getQuestionsAndAnswers(){
				this.fields.questions=this.$refs.qans.question;
				this.fields.answers=this.$refs.qans.answer;
			},
			updateQuans(){
				this.getQuestionsAndAnswers();
				window.axios.put(`faqs/`,this.fields ).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getFaqData(){
				await window.axios.get('faqs/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields.questions=response.data.questions;
						this.fields.answers=response.data.answers
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>