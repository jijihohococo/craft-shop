<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/state' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateCity() : createCity()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Country</label>
									<Select :value="fields.country_id" @input="setCountryId">
										<option value="" disabled >Select Country</option>
										<option v-for="country in countries" :value="country.id">{{ country.name }}</option>
									</Select>
									<strong v-if="errors && errors.country_id" class="invalid-feedback" style="display:block;">{{ errors.country_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>State</label>
									<Select :value="fields.state_id" @input="setStateId">
										<option value="" disabled >Select State</option>
										<option v-for="state in states" :value="state.id">{{ state.name }}</option>
									</Select>
									<strong v-if="errors && errors.state_id" class="invalid-feedback" style="display:block;">{{ errors.state_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Currency</label>
									<Select :value="fields.currency_id" @input="setCurrencyId">
										<option value="" disabled >Select Currency</option>
										<option v-for="currency in currencies" :value="currency.id">{{ currency.name }}</option>
									</Select>
									<strong v-if="errors && errors.currency_id" class="invalid-feedback" style="display:block;">{{ errors.currency_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Delivery Price</label>
									<input type="text" :class="[errors && errors.delivery_price ? 'form-control is-invalid' : 'form-control']" placeholder="Rate" v-model="fields.delivery_price">
									<strong v-if="errors && errors.delivery_price" class="invalid-feedback">{{ errors.delivery_price[0] }}</strong>
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

	import Select from '../components/Select'

	import { mixin } from '../common/'
	
	export default {
		components: {
			Select
		},
		mixins: [mixin],
		data(){
			return {
				content : 'City',
				return_link : 'city',
				currencies : {},
				countries : {},
				states : {},
				country_id  : '',
				fields : {
					name : '',
					state_id : '',
					country_id : '',
					currency_id : '',
					delivery_price : ''
				},
				old_state_id : ''
			}
		},
		async mounted(){
			await this.getCurrencies()
			if(this.current=='update'){
				this.getCityData(this.$route.params.id);
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			await this.getCountries()
		},
		methods : {
			setCountryId(countryId){
				this.fields.country_id=countryId
				this.states={}
				this.getStates(countryId,this.old_state_id)
			},
			setStateId(stateId){
				this.fields.state_id=stateId
			},
			setCurrencyId(currencyId){
				this.fields.currency_id=currencyId
			},
			createCity(){

				window.axios.post("cities",this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateCity(){
				window.axios.put(`cities/${this.$route.params.id}`,this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			getCityData( cityId ){
				window.axios.get('cities/'+cityId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.old_state_id=response.data.city.state_id
						this.fields.name=response.data.city.name
						this.fields.currency_id=response.data.city.currency_id
						this.fields.country_id=response.data.city.country_id;
						// this.fields.currency_id=response.data.city.currency_id
						//console.log(response.data.city)
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getCountries(){
				await window.axios.get('get_countries').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.countries=response.data.countries
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
			async getCurrencies(){
				await window.axios.get('get_currencies').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.currencies=response.data.currencies
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
			async getStates(countryId,stateId){
				await window.axios.get('get_states/'+countryId).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.states=response.data.states
						this.fields.state_id=stateId
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
		}
	}
</script>