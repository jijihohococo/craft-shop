<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/country' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateCountry() : createCountry()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Code</label>
									<input type="text" :class="[errors && errors.code ? 'form-control is-invalid' : 'form-control']" placeholder="Code" v-model="fields.code">
									<strong v-if="errors && errors.code" class="invalid-feedback">{{ errors.code[0] }}</strong>
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

	import { mixin } from '../common/'
	
	export default {
		mixins: [mixin],
		data(){
			return {
				content : 'Country',
				return_link : 'country',
				fields : {
					name : '',
					code : ''
				}
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			if(this.current=='update'){
				await this.getCountryData(this.$route.params.id);
			}
		},
		methods : {
			createCountry(){

				window.axios.post("countries",this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateCountry(){
				window.axios.put(`countries/${this.$route.params.id}`,this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getCountryData( countryId ){
				await window.axios.get('countries/'+countryId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.country;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>