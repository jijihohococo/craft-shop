<template>
	<CreateEditHeader :header="content" />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<div class="card-header">
					<h3 class="card-title">{{ isNaN(this.$route.params.id) ? "Create Permission" : "Update Permission" }}</h3>
				</div>
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updatePermission() : createPermission()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name {{ fields.model }}</label>
									<input type="name" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
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

	import CreateEditHeader from '../components/CreateEditHeader';
	import Select from '../components/Select';
	import Error from '../components/Error';
	import Loading from '../components/Loading';
	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	export default {
		components: {
			CreateEditHeader,
			Select,
			Error,
			Loading
		},
		data(){
			return {
				content : 'Permission',
				checkedAction : [],
				fields : {
					name : '',
					model : '',
					create : false ,
					read : false ,
					update : false ,
					delete : false ,
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
				current : null,
				contents : [
				'Admin',
				'Banner',
				'Category',
				'Subcategory',
				'Brand',
				'Group',
				'Item',
				'Permission',
				'Role',
				'Target',
				'User',
				'Currency'
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
			await	this.getPermissionData(this.$route.params.id);
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
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/permission' })
					}
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
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/permission'})
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getPermissionData( permissionId ){
				window.axios.get('permissions/'+permissionId + '/edit' ).then((response) => {
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