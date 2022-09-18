<template>
	<component is="style" >
		.fileinput-upload-button, .kv-file-upload, .fileinput-remove, .kv-file-remove{
			display: none !important;
		}
	</component>
	<ContentHeader 
	header="Update Shop" 
	:back_links="[
	{ 'route' : '/admin/shop' , 'title' : content }
	]"   />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" 
				enctype="multipart/form-data" 
				@submit.prevent="updateShop()" >
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Phone</label>
									<input type="text" :class="[errors && errors.phone ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.phone">
									<strong v-if="errors && errors.phone" class="invalid-feedback">{{ errors.phone[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Email</label>
									<input type="text" :class="[errors && errors.email ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.email">
									<strong v-if="errors && errors.email" class="invalid-feedback">{{ errors.email[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Address</label>
									<input type="text" :class="[errors && errors.address ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.address">
									<strong v-if="errors && errors.address" class="invalid-feedback">{{ errors.address[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Picture</label>
									<File @change="setPic" :pics="this.fields.pics" @removed="removePic"
									storage_path='image/shop_images/'
									delete_path='admin_api/shop_image_delete/'  />
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

	import { shop } from '../../store';

	export default {
		components: {
			ContentHeader,
			Error,
			File,
			Loading
		},
		data(){
			return {
				shop ,
				content : 'Shop',
				fields : {
					name : '',
					phone  : '',
					email : '',
					address : '',
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
					update : ''
				},
				current : null
			}
		},
		async created(){
			this.current='update';
			checkContentPermission(this.content,this.current,this);
			await this.getShopData(this.$route.params.id);
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
				this.formData.set('phone',this.fields.phone )
				this.formData.set('email',this.fields.email )
				this.formData.set('address',this.fields.address )
				this.formData.set('pic',pic)
				this.formData.append('_method', 'PATCH')
				return this.formData
			},
			updateShop(){
				window.axios.post(`shops/${this.$route.params.id}`,this.getFormData('update')).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.shop.changeData(this.fields);
						document.title=this.shop.data.name
						this.shop.data.pic=response.data.pic
						this.$router.push({path:'/admin/shop'})
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getShopData(shopId){
				window.axios.get('shops/'+shopId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields.name=this.shop.data.name;
						this.fields.email=this.shop.data.email;
						this.fields.phone=this.shop.data.phone;
						this.fields.address=this.shop.data.address;
						this.fields.pic=this.shop.data.pic;
						this.fields.id=this.shop.data.id;
						this.fields.pics=[{
							'filename' : this.shop.data.pic ,
							'id' : this.$route.params.id
						}]
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}

	}
</script>