<template>
	<component is="style">
		.select2-selection__choice{
			background-color: #800080 !important;
			color : white !important;
		}
	</component>
	<ContentHeader
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/role' , 'title' : content }
	]"
	 />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateRole() : createRole()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Permissions</label>
									<SelectMultiple
									placeholder="Select Permissions"
									:value="fields.permissions"  @input="setPermissions" >
										<option :value="permission.id" v-for="permission in permissions">{{ permission.name }}</option>
									</SelectMultiple>
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

	import { errorResponse , checkContentPermission , mergeArray } from '../helpers/check';

	import { showSwalLoading } from  '../../helpers/general'

	import SelectMultiple from '../components/SelectMultiple';

	import { mixin } from '../common/'
	
	export default {
		components: {
			SelectMultiple
		},
		mixins: [mixin],
		data(){
			return {
				content : 'Role',
				return_link : 'role',
				attached_permissions : {}, 
				permissions : {},
				fields : {
					name : '',
					permissions : []
				}
			}
		},
		mounted(){
			if(this.current=='update'){
				this.getRoleData(this.$route.params.id);
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			await this.getPermissions()
		},
		methods : {
			setPermissions(val){
				this.fields.permissions=val
			},
			createRole(){
				window.axios.post("roles",this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateRole(){
				window.axios.put(`roles/${this.$route.params.id}`,this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			getRoleData( roleId ){
				window.axios.get('roles/'+roleId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.role;
						this.fields.permissions=mergeArray(response.data.permissions);
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getPermissions(){
				await window.axios.get('get_permissions').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.permissions=response.data.permissions
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
		}
	}
</script>