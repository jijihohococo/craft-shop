<template>
	<component :is="'style'" >
		.fileinput-upload-button, .kv-file-upload{
			display: none !important;
		}
	</component>
	<CreateEditHeader :header="content" />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<div class="card-header">
					<h3 class="card-title">{{ isNaN(this.$route.params.id) ? "Create Item" : "Update Item" }}</h3>
				</div>
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" enctype="multipart/form-data" @submit.prevent=" !isNaN(this.$route.params.id) ? updateItem() : createItem()" >
					<div class="card-body" >
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Category</label>
									<Select :value="fields.category_id" @input="setCategoryId">
										<option value="" disabled >Select Category</option>
											<option v-for="category in categories" :value="category.id">{{ category.name }}</option>
									</Select>
									<strong v-if="errors && errors.category_id" class="invalid-feedback" style="display:block!important;">{{ errors.category_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>File</label>
									<File @change="setPic" :pics="fields.pics" @removed="removePics" :multiple="true"
									storage_path='storage/item_images/'
									delete_path='admin_api/item_image_delete/'
									delete_all_path='delete_item_images/'  />
								</div>
								<div class="form-group">
									<label>Description</label>
									<textarea :class="[errors && errors.description ? 'form-control is-invalid' : 'form-control']" placeholder="Description" v-model="fields.description">
										
									</textarea>
									<strong v-if="errors && errors.description" class="invalid-feedback">{{ errors.description[0] }}</strong>
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
			Select,
			Loading
		},
		data(){
			return {
				content : 'Item',
				categories : {},
				fields : {
					name : '',
					category_id : '',
					pics : [],
					description : ''
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
				current : null
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			await this.getCategories()
			if(this.current=='update'){
				await this.getItemData(this.$route.params.id);
			}
		},
		methods : {
			async getCategories(){
				 window.axios.get('get_categories').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.categories=response.data.categories
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
			setCategoryId(categoryId){
				this.fields.category_id=categoryId
			},
			removePics(){
				this.fields.pics=[];
			},
			setPic(event){
				if(this.formData.getAll('pics[]').length>0){
					this.formData.delete('pics[]')
				}
				Array.from(event.target.files).forEach(file => {
					this.formData.append('pics[]',file)
				});
			},
			getFormData(update=null){
				let description=this.fields.description==null ? '' : this.fields.description;
				this.formData.set('name',this.fields.name )
				this.formData.set('category_id',this.fields.category_id);
				this.formData.set('description',description);
				if(update!==null){this.formData.append('_method', 'PATCH');}
				return this.formData
			},
			createItem(){
				window.axios.post("items",this.getFormData() ).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/item' })
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateItem(){
				window.axios.post(`items/${this.$route.params.id}`,this.getFormData('update')).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/item'})
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getItemData(itemId){
				 window.axios.get('items/'+itemId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.item;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>