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
										<label>Link</label>
										<input type="text" :class="[errors && errors.page_link ? 'form-control is-invalid' : 'form-control']" placeholder="Link" v-model="fields.page_link">
										<strong v-if="errors && errors.page_link" class="invalid-feedback">{{ errors.page_link[0] }}</strong>
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
										<AttributeSet :inputData="fields.keyword" ref="keywords" />
										<strong v-if="errors && errors.keyword" 
										style="width: 100%;margin-top: .25rem;font-size: 80%;color: #dc3545;" >
										{{ errors.keyword[0] }}
									</strong>
								</div>
								<div class="form-group">
									<label>Meta Name</label>
									<MultipleText 
									:inputData="fields.name_names"
									:inputOneData="fields.name_contents" ref="names" />
									<strong v-if="errors && errors.name_names" 
										style="width: 100%;margin-top: .25rem;font-size: 80%;color: #dc3545;" >
										{{ errors.name_names[0] }}
									</strong>
									<strong v-else-if="errors && errors.name_contents" 
										style="width: 100%;margin-top: .25rem;font-size: 80%;color: #dc3545;" >
										{{ errors.name_contents[0] }}
									</strong>
								</div>
								<div class="form-group">
									<label>Meta Property</label>
									<MultipleText 
									:inputData="fields.property_names"
									:inputOneData="fields.property_contents" ref="properties" />
									<strong v-if="errors && errors.property_names" 
										style="width: 100%;margin-top: .25rem;font-size: 80%;color: #dc3545;" >
										{{ errors.property_names[0] }}
									</strong>
									<strong v-else-if="errors && errors.property_contents" 
										style="width: 100%;margin-top: .25rem;font-size: 80%;color: #dc3545;" >
										{{ errors.property_contents[0] }}
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

	import MultipleText from '../components/MultipleText'

	export default {
		components: {
			AttributeSet,
			MultipleText
		},
		mixins: [mixin],
		data(){
			return {
				content : "Edit SEO",
				return_link : null ,
				fields : {
					title : '',
					page_link : '',
					description : '',
					type : '',
					keyword : [],
					name_names : [],
					name_contents : [],
					property_names : [],
					property_contents : []
				}
			}
		},
		mounted(){
			this.getSeoData(this.$route.params.model,
				this.$route.params.model_id);
		},
		created(){
			this.return_link=this.$route.params.model
			checkContentPermission('Seo','update',this);
		},
		methods : {
			getMeta(){
				this.fields.keyword=this.$refs.keywords.input;
				this.fields.name_names=this.$refs.names.input;
				this.fields.name_contents=this.$refs.names.inputOne;
				this.fields.property_names=this.$refs.properties.input;
				this.fields.property_contents=this.$refs.properties.inputOne;
			},
			updateSeo(){
				this.getMeta()
				window.axios.put(`seos/`+this.$route.params.model+`/`+this.$route.params.model_id,this.fields).then((response)=>{
					this.returnBack(response)
				}).catch((error)=>{
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				})
			},
			getSeoData(model,model_id){
				window.axios.get('seos/'+model + '/' + model_id ).then((response) => {
					let responseData=response.data;
					this.actions.update=true
					this.fields.title=responseData.seo.title
					this.fields.page_link=responseData.seo.page_link
					this.fields.description=responseData.seo.description
					this.fields.type=responseData.seo.type
					if(responseData.keywords.length>0){
						this.fields.keyword=responseData.keywords
					}
					if(responseData.seo_names.length>0){
						this.fields.name_names=responseData.seo_names
					}
					if(responseData.seo_name_contents.length>0){
						this.fields.name_contents=responseData.seo_name_contents
					}
					if(responseData.seo_properties.length>0){
						this.fields.property_names=responseData.seo_properties
					}
					if(responseData.seo_property_contents.length>0){
						this.fields.property_contents=responseData.seo_property_contents
					}
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