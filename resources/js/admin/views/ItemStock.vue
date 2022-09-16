<template>
	<ContentHeader :header="content" />
	<Loading />
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
							@searchData="searchCurrencies"
							/>
							<CreateButton v-if="actions.create" :content="content" link="/admin/currency/create" />
						</div>
						<!-- /.card-header -->
						<template v-if="actions.read">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr>
										</tr>
									</thead>
									<tbody>
										<tr v-for="stock in item_stocks.data" :key="currency.id">
											</tr>
										</tbody>
									</table>
								</div>
								<!-- /.card-body -->
								<div class="card-footer clearfix">
									<Pagination :page="currentPage" :lastPage="item_stocks.last_page" @getData="getItemStocks" @searchData="searchItemStocks" :search="search" :from="item_stocks.from" :to="item_stocks.to" :total="item_stocks.total" />
								</div>
							</template>
						</div>
						<!-- /.card -->
					</div>
				</div>
				<!-- /.row -->
				<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
					<Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Item Stock" />
				</div>
			</div>
		</section>
	</template>
	<script >
		import Pagination from '../components/Pagination';

		import Delete from '../components/Delete';

		import ContentHeader from '../components/ContentHeader';

		import CreateButton from '../components/CreateButton';

		import EditButton from '../components/EditButton';

		import Error from '../components/Error';

		import Loading from '../components/Loading';

		import { errorResponse , checkContentPermission , showSwalLoading , makeRoute , checkActions , unauthorizedActions , showPageNumber } from '../helpers/check.js';

		export default {
			components: {
				Pagination,
				ContentHeader,
				Delete,
				CreateButton,
				EditButton,
				Error,
				Loading
			},
			data () {
				return {
					content : 'Item Stock',
					item_stocks : {},
					search : null ,
					currentPage : 1 ,
					actions : {
						create : '' ,
						read : '' ,
						update : '' ,
						delete : ''
					}
				}
			},
			methods : {
				checkAuthorizeActions(actions){
					return checkActions(actions);
				},
				checkUnauthorizeActions(actions){
					return unauthorizedActions(actions);
				},
				searchItemStocks(page){
					window.axios.get(makeRoute(this,page,'item_variant_stocks/'+this.$route.params.item_varaint_id,'search')+page).then((response)=>{
						if(response.data.message=='Loading'){
							showSwalLoading(this);
						}else{
							this.item_stocks=response.data.item_stocks
							this.actions.read=true
						}
					})
				},
				getItemStocks(page){
					window.axios.get(makeRoute(this,page,'item_variant_stocks/'+this.$route.params.item_varaint_id) + page ).then(( response ) =>  {
						if(response.data.message=='Loading'){

							showSwalLoading(this);
						}else{
							this.item_stocks=response.data.item_stocks
							this.actions.read=true
						}
					} ).catch( (error) => {
						errorResponse(error,this,'read')
					} );
				}
			},
			created(){
				this.getItemStocks(1);
				checkContentPermission(this.content,'create',this);
				checkContentPermission(this.content,'update',this);
			},
		}
	</script>