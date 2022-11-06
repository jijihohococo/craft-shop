<template>
	<ContentHeader :header="mainContent"
	:back_links="[
	{ 'route' : '/admin/currency' , 'title' : 'Currency' }
	]" />
	<section class="content">
		<div class="container-fluid">
			<!-- /.row -->
			<div v-if="checkAuthorizeActions(actions)" class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header row">
							<Search 
							:read="actions.read"
							ref="searchModal"
							@searchData="searchCurrencyRates"
							/>
							<CreateButton v-if="actions.create" :content="content" 
							:link="'/admin/currency/currency_rate/create/'+this.$route.params.currency_id" />
						</div>
						<!-- /.card-header -->
						<template v-if="actions.read">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr>
											<th>Exchanged Currency</th>
											<th>Rate</th>
											<th>Created At</th>
											<th>Operation</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="currency_rate in currency_rates.data" :key="currency_rate.id">
												<td><div v-html="checkString(currency_rate.used_currency)">
												</div></td>
												<td><div v-html="checkString(currency_rate.rate)">
												</div></td>
												<td><div v-html="checkString(currency_rate.created_at)">
												</div></td>
												<td><div v-html="checkString(currency_rate.deleted_at)">
												</div></td>
												<td class="text-left">
													<router-link class="btn btn-primary btn-sm mr-3"  
													:to="{name: 
														'currency.currency_rate_transaction' ,params:{
															name : getTransactionName(currency_rate.main_currency,currency_rate.used_currency) ,
															main_content : mainContent,
															model : content ,
															model_id: currency_rate.id ,
															currency_id : currency_rate.main_currency_id }
														}">
														<i class="fas fa-folder">
														</i>
														View
													</router-link>

													<router-link class="btn btn-info btn-sm mr-3" 
													:to="{name: 
														'currency.currency_rate.edit' ,params:{id: currency_rate.id ,currency_id:currency_rate.main_currency_id}}">
														<i class="fas fa-pencil-alt">
														</i>
														Edit
													</router-link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!-- /.card-body -->
								<div class="card-footer clearfix">
									<Pagination :page="currentPage" :lastPage="currency_rates.last_page" @getData="getCurrencyRates" @searchData="searchCurrencyRates" :search="search" :from="currency_rates.from" :to="currency_rates.to" :total="currency_rates.total" />
								</div>
							</template>
						</div>
						<!-- /.card -->
					</div>
				</div>
				<!-- /.row -->
				<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
					<Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Currency Rate" />
				</div>
			</div>
		</section>
	</template>
	<script >

		import { errorResponse , checkContentPermission , makeRoute } from '../helpers/check';

		import { mixin } from '../common/data_list';

		export default {
			data () {
				return {
					mainContent : null,
					content : 'CurrencyRate',
					mainData : 'currency_rates',
					getMethod : 'getCurrencyRates',
					currency_rates : {}
				}
			},
			mixins: [mixin],
			methods :{
				getTransactionName(oneCurrency,secCurrency){
					return oneCurrency +"'s Exchange Rate For "+secCurrency; 
				},
				getCurrencyRates(page){
					window.axios.get('currency_rates/'+this.$route.params.currency_id + '?page=' + page ).then(( response ) =>  {
						this.getMainData(response)
						if(response.data.main_currency!==null){
							this.mainContent=response.data.main_currency.name+"'s Exchange Rates"
						}
					} ).catch( (error) => {
						errorResponse(error,this,'read')
					} );
				},
				searchCurrencyRates(page){
					this.search=this.$refs.searchModal.searchData;
					window.axios.get( 'search_currency_rates/'+this.$route.params.currency_id + '?search='+this.search+'&page='+page ).then( (response) => {
						this.getMainData(response)
					} ).catch( (error) => {
						errorResponse(error,this,'read');
					} )
				}
			},
			mounted : function(){
				this.getCurrencyRates(1);
				checkContentPermission(this.content,'create',this);
				checkContentPermission(this.content,'update',this);
				checkContentPermission(this.content,'delete',this);
			},
		}
	</script>