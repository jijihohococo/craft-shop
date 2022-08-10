<template>
	<component is="style" >
		.fileinput-upload-button, .kv-file-upload, .fileinput-remove, .kv-file-remove{
			display: none !important;
		}
	</component>
	<CreateEditHeader :header="content" />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<div class="card-header">
					<h3 class="card-title">{{ isNaN(this.$route.params.id) ? "Create Banner" : "Update Banner" }}</h3>
				</div>
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" enctype="multipart/form-data" @submit.prevent=" !isNaN(this.$route.params.id) ? updateBanner() : createBanner()" >
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Title</label>
									<input type="text" :class="[errors && errors.title ? 'form-control is-invalid' : 'form-control']" placeholder="Title" v-model="fields.title">
									<strong v-if="errors && errors.title" class="invalid-feedback">{{ errors.title[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Picture</label>
									<File @change="setPic" :pics="fields.pics" @removed="removePic"
									storage_path='storage/banner_images/'
									delete_path='admin_api/banner_image_delete/'  />
									<strong v-if="errors && errors.pic" class="invalid-feedback" style="display:block!important;" >{{ errors.pic[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Link With Content</label>
									<input type="checkbox" v-model="contentSelected">
								</div>
								<div class="form-group" v-if="contentSelected">
									<Select :options="contents" :value="fields.content" @input="setContent">
										<option value="" disabled >Select Content</option>
									</Select>
									<strong v-if="errors && errors.content" class="invalid-feedback" style="display:block!important;" >{{ errors.content[0] }}</strong>
								</div>
								<div class="form-group" v-if="fields.content!==null && contentSelected">
									<Select :value="fields.content_id" @input="setContentId">
										<option value="" disabled >Select</option>
										<option v-for="selectedContent in selectedContents" :value="selectedContent.id">{{ selectedContent.name }}</option>
									</Select>
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
	import CreateEditHeader from '../components/CreateEditHeader';

	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	import Error from '../components/Error'

	import Loading from '../components/Loading'

	import File from '../components/File'

	import Select from '../components/Select'

	export default {
		components: {
			CreateEditHeader,
			Error,
			File,
			Loading,
			Select
		},
		data(){
			return {
				content : 'Banner',
				contentSelected : false ,
				fields : {
					title : '',
					pic : '',
					pics : [] ,
					count : 0 ,
					content : null ,
					content_id : null
				},
				formData : new FormData ,
				errors : {
					error_status : 0 ,
					error_title : '',
					error_description : ''
				},
				actions : {
					create : '',
					update : ''
				},
				current : null,
				contents : [
				'Category',
				'Subcategory',
				'Brand',
				'Promotion'
				],
				selectedContents : {}
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			if(this.current=='update'){
				await this.getBannerData(this.$route.params.id);
			}
		},
		methods : {
			removePic(){
				this.fields.pic='';
			},
			setContentId(id){
				this.fields.content_id=id
			},
			setContent(content){
				this.selectedContents={};
				this.fields.content_id=null;
				this.fields.content=content
				this.getSubcategories(content);
			},
			setPic(event){
				this.fields.pic=event.target.files[0];
				if(this.count==0){
					this.fields.pics=[];
				}
				this.count++
			},
			getSubcategories(content){
				const check=(content) => {
					switch(content){
						case 'Category':
						return 'get_categories';
						break;

						case 'Subcategory':
						return 'get_all_subcategories';
						break;

						case 'Brand':
						return 'get_brands';
						break;
					}
				}
				window.axios.get(check(content)).then( (response) => {
					if(response.data.message=='Loading'){
						showSwalLoading(this);
					}else{
						this.selectedContents=response.data[Object.keys(response.data)[0]]
					}
				} )
			},
			getFormData(update=null){
				let pic=typeof this.fields.pic == 'string' && !isNaN(this.$route.params.id) ? '' : this.fields.pic;
				this.formData.set('title',this.fields.title )
				this.formData.set('pic',pic)
				if(this.contentSelected==false){
					this.fields.content='';
					this.fields.content_id='';
				}
				this.formData.set('content',this.fields.content)
				this.formData.set('content_id',this.fields.content_id)
				if(update!==null){this.formData.append('_method', 'PATCH');}
				return this.formData
			},
			createBanner(){
				window.axios.post("banners",this.getFormData() ).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/banner' })
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateBanner(){
				window.axios.post(`banners/${this.$route.params.id}`,this.getFormData('update')).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/banner'})
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getBannerData(bannerId){
				window.axios.get('banners/'+bannerId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.banner;
						this.fields.pics=[{'filename':this.fields.pic,'id': !isNaN(this.$route.params.id) ? this.$route.params.id : null }]
						if(this.fields.content!==null){
							this.contentSelected=true;
							this.getSubcategories(this.fields.content)
						}
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}

	}
</script>