<template>
	<component is="style">
		.select2-selection__choice{
			background-color: #800080 !important;
			color : white !important;
		}
	</component>
	<CreateEditHeader :header="content" />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<div class="card-header">
					<h3 class="card-title">{{ isNaN(this.$route.params.id) ? "Create Role" : "Update Role" }}</h3>
				</div>
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateRole() : createRole()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
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

	import CreateEditHeader from '../components/CreateEditHeader';

	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	import Error from '../components/Error'

	import Loading from '../components/Loading'

	import SelectMultiple from '../components/SelectMultiple';
	
	export default {
		components: {
			CreateEditHeader,
			Error,
			Loading,
			SelectMultiple
		},
		data(){
			return {
				content : 'Role',
				attached_permissions : {}, 
				permissions : {},
				fields : {
					name : '',
					permissions : []
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
			await this.getPermissions()
			if(this.current=='update'){
				await this.getRoleData(this.$route.params.id);
			}
		},
		methods : {
			setPermissions(val){
				this.fields.permissions=val
			},
			createRole(){
				window.axios.post("roles",this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/role' })
					}
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
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/role'})
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getRoleData( roleId ){
				window.axios.get('roles/'+roleId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.role;
						let permissions=response.data.permissions;
						let array = [];
						if(permissions.length>0){
							Object.keys(permissions).map((k) => {
								array.push(permissions[k]['id'])
							} )
						}
						this.fields.permissions=array;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getPermissions(){
				window.axios.get('get_permissions').then( (response) => {
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