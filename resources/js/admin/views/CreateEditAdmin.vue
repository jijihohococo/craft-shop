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
	{ 'route' : '/admin/admin' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateAdmin() : createAdmin()">
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
								<strong v-if="errors && errors.roles" class="invalid-feedback" style="display:block!important;">{{ errors.roles[0] }}</strong>
							</div>
							<template v-if="admin.data.id==this.$route.params.id">
							<div class="form-group">
								<label>Password</label>
								<input type="password" :class="[ errors & errors.password ? 'form-control is-invalid' : 'form-control' ]" placeholder="Password" v-model="fields.password">
								<strong v-if="errors && errors.password" class="invalid-feedback" style="display:block!important;">{{ errors.password[0] }}</strong>
							</div>
							<div class="form-group">
								<label>Confirm Password</label>
								<input type="password" :class="[ errors & errors.password_confirmation ? 'form-control is-invalid' : 'form-control' ]" placeholder="Password" v-model="fields.password_confirmation">
								<strong v-if="errors && errors.password_confirmation" class="invalid-feedback" style="display:block!important;">{{ errors.password_confirmation[0] }}</strong>
							</div>
							</template>
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

	import { admin } from '../../store';

	import { mixin } from '../common/'
	
	export default {
		components: {
			SelectMultiple
		},
		mixins: [mixin],
		data(){
			return {
				admin ,
				header : '',
				content : 'Admin',
				return_link : 'admin',
				roles : {},
				fields : {
					name : '',
					email : '',
					password : '',
					password_confirmation : '',
					roles : []
				},
			}
		},
		mounted(){
			if(this.current=='update'){
				this.getAdminData(this.$route.params.id);
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			await this.getRoles()
		},
		methods : {
			setRoles(val){
				this.fields.roles=val
			},
			createAdmin(){
				window.axios.post("admins",this.fields).then( (response) => {
					this.returnBack(response)
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
						if(this.admin.data.id==this.$route.params.id){
							this.admin.changeData(this.fields);
						}
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
						this.fields.password_confirmation=''
						this.fields.roles=mergeArray(response.data.roles);
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getRoles(){
				await window.axios.get('get_roles').then( (response) => {
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