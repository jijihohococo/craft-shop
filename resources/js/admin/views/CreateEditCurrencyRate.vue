<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+mainContent : 'Update '+mainContent" 
	:back_links="[
	{
		'route' : '/admin/currency','title':'Currency'
	},
	{ 'route' : '/admin/currency/currency_rate/'+this.$route.params.currency_id , 'title' : mainContent }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateCurrencyRate() : createCurrencyRate()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Exchanged Currency</label>
									<template v-if="current=='create'" >
									<Select :value="fields.used_currency_id" @input="setCurrencyId">
										<option value="" disabled >Select Currency</option>
										<option v-for="currency in currencies" :value="currency.id">{{ currency.name }}</option>
									</Select>
								</template>
								<template v-else>
									<p>{{ fields.used_currency }}</p>
								</template>
									<strong v-if="errors && errors.used_currency_id" class="invalid-feedback" style="display:block!important;">{{ errors.used_currency_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Exchanged Rate</label>
									<input type="text" :class="[errors && errors.rate ? 'form-control is-invalid' : 'form-control']" placeholder="Exchanged Rate" v-model="fields.rate">
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
				content : 'CurrencyRate',
				mainContent : null,
				return_link : 'currency/currency_rate/'+this.$route.params.currency_id,
				currencies : {},
				fields : {
					used_currency_id : '',
					rate : ''
				}
			}
		},
		mounted(){
			if(this.current=='update'){
				this.getCurrencyRateData(this.$route.params.id);
			}else{
				this.getCurrency(this.$route.params.currency_id)
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			await this.getCurrencies()
		},
		methods : {
			getCurrency(currencyId){
				window.axios.get('currencies/'+currencyId).then( (response) => {
					this.mainContent=response.data.currency.name+"'s Exchange Rates"
				})
			},
			setCurrencyId(currencyId){
				this.fields.used_currency_id=currencyId
			},
			createCurrencyRate(){

				window.axios.post("save_currency_rates/"+this.$route.params.currency_id,this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateCurrencyRate(){
				window.axios.post(`update_currency_rates/${this.$route.params.id}`,this.fields).then( (response) => {
					this.returnBack(response)
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			getCurrencyRateData( currencyRateId ){
				window.axios.get('currency_rates/'+currencyRateId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.currency_rate;
						this.mainContent=response.data.currency_rate.main_currency+"'s Exchange Rates"
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getCurrencies(){
				await window.axios.get('get_used_currencies/'+this.$route.params.currency_id).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.currencies=response.data.currencies
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
		}
	}
</script>