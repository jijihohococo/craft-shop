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
									<label>Category</label>
									<Select :value="fields.category_id" @input="setCategoryId">
										<option value="" disabled >Select Category</option>
										<option v-for="category in categories" :value="category.id">{{ category.name }}</option>
									</Select>
									<strong v-if="errors && errors.category_id" class="invalid-feedback" style="display:block!important;">{{ errors.category_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
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

	import Select from '../components/Select'

	import { mixin } from '../common/'
	
	export default {
		components: {
			Select
		},
		mixins: [mixin],
		data(){
			return {
				content : 'Subcategory',
				return_link  : 'subcategory',
				categories : {},
				fields : {
					name : '',
					category_id : ''
				}
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
					this.returnBack(response)
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
					this.returnBack(response)
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