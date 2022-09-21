<template>
	<component is="style" >
		.fileinput-upload-button, .kv-file-upload{
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
	{ 'route' : '/admin/item' , 'title' : content }
	]"   />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateItem() : createItem()" >
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
									<label>Subcategory</label>
									<Select :value="fields.subcategory_id" @input="setSubcategoryId">
										<option value="" disabled >Select Subcategory</option>
										<option v-for="subcategory in subcategories" :value="subcategory.id">{{ subcategory.name }}</option>
									</Select>
									<strong v-if="errors && errors.subcategory_id" class="invalid-feedback" style="display:block!important;">{{ errors.subcategory_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Brand</label>
									<Select :value="fields.brand_id" @input="setBrandId">
										<option value="" disabled >Select Brand</option>
										<option v-for="brand in brands" :value="brand.id">{{ brand.name }}</option>
									</Select>
									<strong v-if="errors && errors.brand_id" class="invalid-feedback" style="display:block!important;">{{ errors.brand_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Attributes</label>
									<AddRemoveDependentSelect
									placeholder="Select Sets" 
									:mainData="fields.attributes"
									:selectData="attributes"
									ref="attributeSet" />
								</div>
								<div class="form-group">
									<label>Colors</label>
									<SelectMultiple
									placeholder="Select Colors"
									:value="fields.colors"  @input="setColors" >
										<option :value="color.id" v-for="color in colors">{{ color.name }}</option>
									</SelectMultiple>
								</div>
								<strong v-if="errors && errors.colors" class="invalid-feedback" style="display:block!important;">{{ errors.colors[0] }}</strong>
								<div class="form-group">
									<label>Taxes</label>
									<SelectMultiple
									placeholder="Select Taxes"
									:value="fields.taxes" @input="setTaxes" >
									<option :value="tax.id" v-for="tax in taxes">{{ tax.name }}</option>
								</SelectMultiple>
								</div>
								<!-- <div class="form-group">
									<label>File</label>
									<File @change="setPic" :pics="fields.pics" @removed="removePics" :multiple="true"
									storage_path='storage/item_images/'
									delete_path='admin_api/item_image_delete/'
									delete_all_path='delete_item_images/'  />
								</div> -->
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

	import ContentHeader from '../components/ContentHeader';

	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	import Error from '../components/Error'

	import Loading from '../components/Loading'

	//import File from '../components/File'

	import SelectMultiple from '../components/SelectMultiple';

	import Select from '../components/Select'

	import AddRemoveDependentSelect from '../components/AddRemoveDependentSelect';

	export default {
		components: {
			ContentHeader,
			Error,
			//File,
			SelectMultiple,
			Select,
			Loading,
			AddRemoveDependentSelect
		},
		data(){
			return {
				content : 'Item',
				categories : {},
				subcategories : {},
				brands : {},
				attributes : {},
				colors : {} ,
				taxes : {} ,
				numberOfAttributes : 0 ,
				fields : {
					name : '',
					category_id : '',
					subcategory_id : '',
					brand_id : '',
					//pics : [],
					colors : [],
					taxes : [],
					description : '' ,
					attributes : []
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
				current : null ,
				old_subcategory_id : '' 
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			await this.getCategories()
			await this.getBrands()
			await this.getAttributes()
			await this.getColors()
			await this.getTaxes()
			if(this.current=='update'){
				await this.getItemData(this.$route.params.id);
			}
		},
		methods : {
			getManyAttributes(){
				if(this.numberOfAttributes>0){
					let attributes=[...Array(this.numberOfAttributes).keys()]
					attributes.map( (data,index) => {
						this.formData.delete('attributes['+data+']')
					} )
				}
				let attributeSets=this.$refs.attributeSet.main;
				this.numberOfAttributes=attributeSets.length
				attributeSets.map( (data,index) => {
					this.formData.set( 'attributes['+index+'][id]' , data.id  )
					let setArray=[];
					data.selectedSubData.map( (set) => {
						setArray.push(set)
					} )
					this.formData.set('attributes['+index+'][set]',setArray)
				} )
			},
			async getAttributes(){
				window.axios.get('get_attributes').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.attributes=response.data.attributes
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
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
			async getSubcategories(categoryId,subcategoryId){
				window.axios.get('get_subcategories/'+categoryId).then( (response) => {
					if(response.data.message=='Loading'){
						showSwalLoading(this);
					}else{
						this.subcategories=response.data.subcategories
						//if(this.old_subcategory_id!==''){
						this.fields.subcategory_id=subcategoryId
					//}
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
			async getBrands(){
				window.axios.get('get_brands').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.brands=response.data.brands
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
			async getColors(){
				window.axios.get('get_colors').then( (response) => {
					if(response.data.message=='Loading'){
						showSwalLoading(this);
					}else{
						this.colors=response.data.colors
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
			async getTaxes(){
				window.axios.get('get_taxes').then( (response) => {
					if(response.data.message=='Loading'){
						showSwalLoading(this);
					}else{
						this.taxes=response.data.taxes
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
			setColors(val){
				this.fields.colors=val
			},
			setTaxes(val){
				this.fields.taxes=val
			},
			setCategoryId(categoryId){
				this.fields.category_id=categoryId
				this.subcategories={}
				//this.fields.subcategory_id=''
				this.getSubcategories(categoryId,this.old_subcategory_id)
			},
			setSubcategoryId(subcategoryId){
				this.fields.subcategory_id=subcategoryId
			},
			setBrandId(brandId){
				this.fields.brand_id=brandId
			},
			// removePics(){
			// 	this.fields.pics=[];
			// },
			// setPic(event){
			// 	if(this.formData.getAll('pics[]').length>0){
			// 		this.formData.delete('pics[]')
			// 	}
			// 	Array.from(event.target.files).forEach(file => {
			// 		this.formData.append('pics[]',file)
			// 	});
			// },
			getFormData(update=null){
				let description=this.fields.description==null ? '' : this.fields.description;
				this.formData.set('name',this.fields.name )
				this.formData.set('category_id',this.fields.category_id);
				this.formData.set('subcategory_id',this.fields.subcategory_id);
				this.formData.set('brand_id',this.fields.brand_id);
				if(this.fields.colors.length>0){
					this.fields.colors.map( (data,index) => {
						this.formData.set( 'colors['+index+']' , data  )
					} )
				}
				if(this.fields.taxes.length>0){
					this.fields.taxes.map( (data,index) => {
						this.formData.set( 'taxes['+index+']' ,data )
					} )
				}
				this.formData.set('description',description);
				this.getManyAttributes();

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
						//this.fields=response.data.item;
						//if(response.data.attributes!==[]){
						//this.fields.attributes=response.data.attributes;
						//}
					this.old_subcategory_id=response.data.item.subcategory_id
					this.fields.name=response.data.item.name;
					this.fields.category_id=response.data.item.category_id;
					// this.fields.subcategory_id=response.data.item.subcategory_id;
					this.fields.brand_id=response.data.item.brand_id;
					this.fields.description=response.data.item.description;
					 if(response.data.attributes.length>0 ){
					 	this.fields.attributes=response.data.attributes;
					 }
					this.fields.colors=response.data.colors;
					this.fields.taxes=response.data.taxes;
				}
			} ).catch( (error) => {
				errorResponse(error,this,'update')
			} )
		}
	}
}
</script>