<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/subcategory' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateSubcategory() : createSubcategory()">
					<div class="card-body">
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

	import Select from '../components/Select'
	
	export default {
		components: {
			ContentHeader,
			Error,
			Select
		},
		data(){
			return {
				content : 'Subcategory',
				categories : {},
				fields : {
					name : '',
					category_id : ''
				},
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
				await this.getSubcategoryData(this.$route.params.id);
			}
		},
		methods : {
			setCategoryId(categoryId){
				this.fields.category_id=categoryId
			},
			createSubcategory(){

				window.axios.post("subcategories",this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/subcategory' })
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateSubcategory(){
				window.axios.put(`subcategories/${this.$route.params.id}`,this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/subcategory'})
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getSubcategoryData( subcategoryId ){
				window.axios.get('subcategories/'+subcategoryId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.subcategory;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
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
		}
	}
</script>