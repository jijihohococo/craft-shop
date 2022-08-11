<template>
	<CreateEditHeader :header="content" />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<div class="card-header">
					<h3 class="card-title">{{ isNaN(this.$route.params.id) ? "Create Attribute" : "Update Attribute" }}</h3>
				</div>
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]"  @submit.prevent=" !isNaN(this.$route.params.id) ? updateAttribute() : createAttribute()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="name" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name" autofocus="autofocus">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Sets</label>
									<AttributeSet :inputData="fields.sets" ref="attributeSet" />
									<strong v-if="errors && errors.set" 
									style="width: 100%;margin-top: .25rem;font-size: 80%;color: #dc3545;" >
									{{ errors.set[0] }}
								</strong>
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

	import AttributeSet from '../components/AttributeSet'
	
	export default {
		components: {
			CreateEditHeader,
			Error,
			Loading,
			AttributeSet
		},
		data(){
			return {
				content : 'Attribute',
				fields : {
					name : '',
					sets : []
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
				current : null
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);

			if(this.current=='update'){
				await this.getAttributeData(this.$route.params.id);
			}
		},
		methods : {
			getAttributeSets(){
				this.fields.sets=this.$refs.attributeSet.input;
			},
			createAttribute(){
				this.getAttributeSets();
				window.axios.post("attributes",this.fields ).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/attribute' })
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateAttribute(){
				this.getAttributeSets();
				window.axios.put(`attributes/${this.$route.params.id}`,this.fields ).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/attribute'})
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getAttributeData( attributeId ){
				window.axios.get('attributes/'+attributeId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.attribute;
						this.fields.sets=response.data.sets;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>