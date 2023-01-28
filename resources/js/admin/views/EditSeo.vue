<template>
	<ContentHeader :header="content"
	:back_links="[
		{'route':getLink(this.$route.params.model),'title':this.$route.params.model}
		]" />
		<section class="content">
			<div class="container-fluid">
				<div class="card card-default">
					<Error v-if="actions.update==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
					<form v-else-if="actions.update" @submit.prevent="updateSeo()">
						<div class="card-body">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label>Title</label>
										<input type="text" :class="[errors && errors.title ? 'form-control is-invalid' : 'form-control']" placeholder="Title" v-model="fields.title">
										<strong v-if="errors && errors.title" class="invalid-feedback">{{ errors.title[0] }}</strong>
									</div>
									<div class="form-group">
										<label>Description</label>
										<textarea :class="[errors && errors.description ? 'form-control is-invalid' : 'form-control']" placeholder="Description" v-model="fields.description">

										</textarea>
										<strong v-if="errors && errors.description" class="invalid-feedback">{{ errors.description[0] }}</strong>
									</div>
									<div class="form-group">
										<label>Type</label>
										<input type="text" :class="[errors && errors.type ? 'form-control is-invalid' : 'form-control']" placeholder="Type" v-model="fields.type">
										<strong v-if="errors && errors.type" class="invalid-feedback">{{ errors.type[0] }}</strong>
									</div>
									<div class="form-group">
										<label>Keywords</label>
										<AttributeSet :inputData="fields.keywords" ref="keywords" />
										<strong v-if="errors && errors.keyword" 
										style="width: 100%;margin-top: .25rem;font-size: 80%;color: #dc3545;" >
										{{ errors.keyword[0] }}
									</strong>
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

	import { errorResponse , checkContentPermission } from '../helpers/check';
	
	import { mixin } from '../common/'
	
	import AttributeSet from '../components/AttributeSet'

	export default {
		components: {
			AttributeSet
		},
		mixins: [mixin],
		data(){
			return {
				content : "Edit SEO",
				return_link : null ,
				fields : {
					title : '',
					description : '',
					type : '',
					keywords : []
				}
			}
		},
		mounted(){
			this.getSeoData(this.$route.params.model,
				this.$route.params.model_id);
		},
		created(){
			checkContentPermission('Seo','update',this);
		},
		methods : {
			updateSeo(){

			},
			getSeoData(model,model_id){
				window.axios.get('seos/'+model + '/' + model_id ).then((response) => {
					this.actions.update=true
					this.fields.title=response.data.seo.title
					this.fields.description=response.data.seo.description
					this.fields.type=response.data.seo.type
					this.fields.keywords=response.data.keywords
				}).catch( (error) => {
					let errorStatus=error.response.status
					if(errorStatus==404 && error.response.data.message=='Data is not found' ){
						this.actions.update=true
					}else{
						errorResponse(error,this,'update')
					}
				} )
			}
		}
	}
</script>