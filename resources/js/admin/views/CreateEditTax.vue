<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/tax' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateTax() : createTax()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Rate</label>
									<input type="text" :class="[errors && errors.rate ? 'form-control is-invalid' : 'form-control']" placeholder="Rate" v-model="fields.rate">
									<strong v-if="errors && errors.rate" class="invalid-feedback">{{ errors.rate[0] }}</strong>
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

	import { checkContentPermission , errorResponse } from '../helpers/check';

	import { showSwalLoading } from  '../../helpers/general'

	import { mixin } from '../common/'
	
	export default {
		mixins: [mixin],
		data(){
			return {
				content : 'Tax',
				return_link  : 'tax',
				fields : {
					name : '',
					rate : ''
				}
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			if(this.current=='update'){
			await this.getTaxData(this.$route.params.id);
			}
		},
		methods : {
			createTax(){
				window.axios.post("taxes",this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateTax(){
				window.axios.put(`taxes/${this.$route.params.id}`,this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getTaxData( taxId ){
				await window.axios.get('taxes/'+taxId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.tax;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>