<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/permission' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updatePermission() : createPermission()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
								</div>
								<div class="form-group">
									<label>Content</label>
									<Select :options="contents" :value="fields.model" @input="setModel">
										<option value="" disabled >Select Content</option>
									</Select>
									<strong v-if="errors && errors.model" class="invalid-feedback" style="display:block!important;" >{{ errors.model[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Access</label>
									<br>
									<template v-for="permission in permissions">
										<input type="checkbox" :id="permission" :value="permission" v-model="checkedAction" >
										<label class="form-check-label mr-3" :for="permission">{{ permission }}</label>
									</template>
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

	import Select from '../components/Select';
	
	import { errorResponse , checkContentPermission } from '../helpers/check';
	import { showSwalLoading } from  '../../helpers/general'
	import { mixin } from '../common/'

	export default {
		components: {
			Select
		},
		mixins: [mixin],
		data(){
			return {
				content : 'Permission',
				return_link : 'permission',
				checkedAction : [],
				fields : {
					name : '',
					model : '',
					create : false ,
					read : false ,
					update : false ,
					delete : false ,
				},
				contents : [
				'Permission',
				'Shop',
				'Admin',
				'Banner',
				'Category',
				'Subcategory',
				'Brand',
				'Item',
				'ItemStock',
				'ItemPrice',
				'Role',
				'Target',
				'User',
				'Currency',
				'CurrencyRate',
				'Tax',
				'Attribute',
				'Color',
				'Country',
				'State',
				'City',
				'Order',
				'Promotion',
				'Collection',
				'SocialMedia',
				'Blog',
				'Faq',
				'Page',
				'CustomerService',
                'Seo'
				],
				permissions: [
				'create',
				'read',
				'update',
				'delete'
				]
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			if(this.current=='update'){
				await this.getPermissionData(this.$route.params.id);
			}
		},
		methods : {
			setModel(model){
				this.fields.model=model
			},
			mergeAction(){
				this.permissions.forEach( (action) => {
					this.fields[action]=this.checkedAction.includes(action) ? true : false
				} )
			},
			createPermission(){
				this.mergeAction();	
				window.axios.post("permissions",this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updatePermission(){
				this.mergeAction();
				window.axios.put(`permissions/${this.$route.params.id}`,this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getPermissionData( permissionId ){
				await window.axios.get('permissions/'+permissionId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.permission;
						this.permissions.forEach( (action) => {
							if(this.fields[action]==true){
								this.checkedAction.push(action)
							}
						} )
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		},
	}
</script>