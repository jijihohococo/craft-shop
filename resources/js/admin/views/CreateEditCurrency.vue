<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/currency' , 'title' : content }
	]"   />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateCurrency() : createCurrency()">
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
									<input type="text" :class="[errors && errors.price ? 'form-control is-invalid' : 'form-control']" placeholder="Rate" v-model="fields.price">
									<strong v-if="errors && errors.price" class="invalid-feedback">{{ errors.price[0] }}</strong>
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

	import { checkContentPermission , errorResponse , showSwalLoading } from '../helpers/check.js';

	import Error from '../components/Error'

	import Loading from '../components/Loading'
	
	export default {
		components: {
			ContentHeader,
			Error,
			Loading
		},
		data(){
			return {
				content : 'Currency',
				fields : {
					name : '',
					price : ''
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
			if(this.current=='update'){
			await this.getCurrencyData(this.$route.params.id);
			}
		},
		methods : {
			createCurrency(){
				window.axios.post("currencies",this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/currency' })
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateCurrency(){
				window.axios.put(`currencies/${this.$route.params.id}`,this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/currency'})
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getCurrencyData( currencyId ){
				window.axios.get('currencies/'+currencyId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.currency;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>