<template>
	<component is="style" >
		.fileinput-upload-button, .kv-file-upload, .fileinput-remove, .kv-file-remove{
			display: none !important;
		}
	</component>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/brand' , 'title' : content }
	]"   />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" enctype="multipart/form-data" @submit.prevent=" !isNaN(this.$route.params.id) ? updateBrand() : createBrand()" >
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
									storage_path='image/brand_images/'
									  />
									<strong v-if="errors && errors.pic" class="invalid-feedback" style="display:block!important;" >{{ errors.pic[0] }}</strong>
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

	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	import Error from '../components/Error'

	import Loading from '../components/Loading'

	import File from '../components/File'

	export default {
		components: {
			ContentHeader,
			Error,
			File,
			Loading
		},
		data(){
			return {
				content : 'Brand',
				fields : {
					name : '',
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
			if(this.current=='update'){
				await this.getBrandData(this.$route.params.id);
			}
		},
		methods : {
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
				if(update!==null){this.formData.append('_method', 'PATCH');}
				return this.formData
			},
			createBrand(){
				window.axios.post("brands",this.getFormData() ).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/brand' })
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateBrand(){
				window.axios.post(`brands/${this.$route.params.id}`,this.getFormData('update')).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/brand'})
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getBrandData(brandId){
				window.axios.get('brands/'+brandId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.brand;
						this.fields.pics=[{'filename':this.fields.pic,'id': !isNaN(this.$route.params.id) ? this.$route.params.id : null }]
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}

	}
</script>