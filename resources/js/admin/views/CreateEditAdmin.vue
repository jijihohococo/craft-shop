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
					<h3 class="card-title">{{ isNaN(this.$route.params.id) ? "Create Admin" : "Update Admin" }}</h3>
				</div>
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
									<label>Email</label>
									<input type="text" :class="[errors && errors.email ? 'form-control is-invalid' : 'form-control']" placeholder="Email" v-model="fields.email">
									<strong v-if="errors && errors.email" class="invalid-feedback">{{ errors.email[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Roles</label>
									<SelectMultiple
									placeholder="Select Roles"
									:value="fields.roles"  @input="setRoles" >
									<option :value="role.id" v-for="role in roles">{{ role.name }}</option>
								</SelectMultiple>
							</div>
							<div class="form-group">
								<label>Password</label>
								<input type="password" :class="[ errors & errors.password ? 'form-control is-invalid' : 'form-control' ]" placeholder="Password" v-model="fields.password">
								<strong v-if="errors && errors.password" class="invalid-feedback">{{ errors.password[0] }}</strong>
							</div>
							<div class="form-group">
								<label>Confirm Password</label>
								<input type="password" :class="[ errors & errors.confirm_password ? 'form-control is-invalid' : 'form-control' ]" placeholder="Password" v-model="fields.confirm_password">
								<strong v-if="errors && errors.confirm_password" class="invalid-feedback">{{ errors.confirm_password[0] }}</strong>
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

	import { errorResponse , checkContentPermission , showSwalLoading , mergeArray } from '../helpers/check.js';

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
				content : 'Admin',
				roles : {},
				fields : {
					name : '',
					email : '',
					password : '',
					confirm_password : '',
					roles : []
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
			this.getRoles()
			if(this.current=='update'){
				await this.getAdminData(this.$route.params.id);
			}
		},
		methods : {
			setRoles(val){
				this.fields.permissions=val
			},
			createAdmin(){
				window.axios.post("admins",this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/admin' })
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateAdmin(){
				window.axios.put(`admins/${this.$route.params.id}`,this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/admin'})
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			getAdminData( adminId ){
				window.axios.get('admins/'+adminId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.admin;
						this.fields.password='';
						this.fields.confirm_password=''
						this.fields.roles=mergeArray(response.data.roles);
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getRoles(){
				window.axios.get('get_roles').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.roles=response.data.roles
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
		}
	}
</script>