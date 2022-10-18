<template>
	<component is="style" >
		.fileinput-upload-button, .kv-file-upload, .fileinput-remove, .kv-file-remove{
			display: none !important;
		}
		.select2-selection__choice{
			background-color: #800080 !important;
			color : white !important;
		}
	</component>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/collection' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" enctype="multipart/form-data" @submit.prevent=" !isNaN(this.$route.params.id) ? updateCollection() : createCollection()" >
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Picture</label>
									<File @change="setPic" :pics="this.fields.pics" @removed="removePic"
									storage_path='image/collection_images/'  />
									<strong v-if="errors && errors.pic" class="invalid-feedback" style="display:block!important;" >{{ errors.pic[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Items</label>
									<SelectMultiple
									placeholder="Select Items"
									:value="fields.items"
									@input="setItems" >
									<option :value="item.id"
									v-for="item in items">{{ item.name }}</option>
								</SelectMultiple>
								<strong v-if="errors && errors.items" class="invalid-feedback" style="display:block!important;">{{ errors.items[0] }}</strong>
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

	import { errorResponse , checkContentPermission , showSwalLoading , mergeArray } from '../helpers/check.js';

	import Error from '../components/Error'

	import File from '../components/File'

	import SelectMultiple from '../components/SelectMultiple';

	export default {
		components: {
			ContentHeader,
			Error,
			File,
			SelectMultiple
		},
		data(){
			return {
				content : 'Collection',
				items : {},
				fields : {
					name : '',
					items : [],
					pic : '',
					pics : [] ,
					count : 0
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
			await this.getItems()
			if(this.current=='update'){
				await this.getCollectionData(this.$route.params.id);
			}
		},
		methods : {
			setItems(val){
				this.fields.items=val
			},
			removePic(){
				this.fields.pic='';
			},
			setPic(event){
				this.fields.pic=event.target.files[0];
				if(this.count==0){
					this.fields.pics=[];
				}
				this.count++
			},
			getFormData(update=null){
				let pic=typeof this.fields.pic == 'string' && !isNaN(this.$route.params.id) ? '' : this.fields.pic;
				this.formData.set('name',this.fields.name )
				this.formData.set('pic',pic)
				if(this.fields.items.length>0){
					this.fields.items.map( (data,index) => {
						this.formData.set( 'items['+index+']' , data  )
					} )
				}
				if(update!==null){this.formData.append('_method', 'PATCH');}
				return this.formData
			},
			createCollection(){
				window.axios.post("collections",this.getFormData() ).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/collection' })
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateCollection(){
				window.axios.post(`collections/${this.$route.params.id}`,this.getFormData('update')).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/collection'})
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getCollectionData(collectionId){
				window.axios.get('collections/'+collectionId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.collection;
						this.fields.pics=[{'filename':this.fields.pic,'id': !isNaN(this.$route.params.id) ? this.$route.params.id : null }]
						this.fields.items=mergeArray(response.data.items);
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getItems(){
				window.axios.get('get_items').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.items=response.data.items
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
		}

	}
</script>