<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/page' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updatePage() : createPage()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Link</label>
									<input type="text" :class="[errors && errors.link ? 'form-control is-invalid' : 'form-control']" placeholder="Link" v-model="fields.link">
									<strong v-if="errors && errors.link" class="invalid-feedback">{{ errors.link[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Description</label>
									<Editor
									:api-key="api_key"
									:plugins="plugins"
									v-model="fields.description"
									:init="{height: 1000}"
									/>
									<strong v-if="errors && errors.description" class="invalid-feedback" style="display:block!important;">{{ errors.description[0] }}</strong>
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

	import { showSwalLoading } from  '../../helpers/general'

	import { mixin } from '../common/'

	import Editor from '@tinymce/tinymce-vue'
	
	export default {
		mixins: [mixin],
		components : {
			Editor
		},
		data(){
			return {
				content : 'Page',
				return_link : 'page',
				api_key : "bd09m0ur4m7ok4azkjs9r1f10ik9q5cb923mioegtexrhum4",
				plugins: [
				'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
				'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
				'insertdatetime', 'media', 'table', 'help', 'wordcount'
				],
				fields : {
					name : '',
					link : '',
					description : ''
				}
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			if(this.current=='update'){
				await this.getPageData(this.$route.params.id);
			}
		},
		methods : {
			createPage(){

				window.axios.post("pages",this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updatePage(){
				window.axios.put(`pages/${this.$route.params.id}`,this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getPageData( pageId ){
				await window.axios.get('pages/'+pageId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.page;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>