<template>
	<ContentHeader :header="content" 
	:back_links="[
	{ 'route' : '/admin/item' , 'title' : 'Item' },
	{ 'route' : '/admin/item/variant/'+this.$route.params.item_varaint_id , 'title' : itemColor }
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
							@searchData="searchItemStocks"
							/>
							<CreateButton v-if="actions.create" :content="content" :link="'/admin/item/stock/create/'+this.$route.params.item_varaint_id" />
						</div>
						<!-- /.card-header -->
						<template v-if="actions.read">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr>
											<th>Stock</th>
											<th>Available Stock</th>
											<th>Quantity</th>
											<th>Created At</th>
											<th>Operation</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(stock,key) in item_stocks.data">
											<td><div v-html="checkString(stock.stock)">
											</div></td>
											<td><div v-html="checkString(stock.available_stock)">
											</div></td>
											<td><div v-html="checkString(stock.qty)">
											</div></td>
											<td><div v-html="checkString(stock.created_at)">
											</div></td>
											<td>
												<router-link class="btn btn-primary btn-sm mr-3"  
												:to="{name: 
													'item.transaction' ,params:{
														name : itemColor ,
														model : mainContent ,
														model_id: stock.id ,
														item_id : stock.item_id }
													}">
													<i class="fas fa-folder">
													</i>
													View
												</router-link>
												<EditButton v-if="actions.update && key==0" :content="content" link="item.stock.edit" :dataId="stock.id" /></td>
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
		import Pagination from '../../components/Pagination';

		import ContentHeader from '../components/ContentHeader';

		import CreateButton from '../components/CreateButton';

		import EditButton from '../components/EditButton';

		import Search from '../components/Search';

		import Error from '../components/Error';

		import ViewButton from '../components/ViewButton';

		import { errorResponse , checkContentPermission , makeRoute , checkActions , unauthorizedActions , showPageNumber , getItemColor } from '../helpers/check';

		import { showSwalLoading } from  '../../helpers/general'

		import { mainMixinData } from '../common/main';

		export default {
			components: {
				Pagination,
				ContentHeader,
				CreateButton,
				EditButton,
				ViewButton,
				Error,
				Search
			},
			mixins : [mainMixinData],
			data () {
				return {
					mainContent : "ItemStock",
					content : null,
					item_stocks : {},
					itemColor : null ,
					search : null ,
					currentPage : 1 ,
					actions : {
						create : '' ,
						read : '' ,
						update : ''
					}
				}
			},
			methods : {
				getContent(data){
					return data + "'s Stock"
				},
				checkAuthorizeActions(actions){
					return checkActions(actions);
				},
				checkUnauthorizeActions(actions){
					return unauthorizedActions(actions);
				},
				getData(responseData){
					this.item_stocks=responseData.item_stocks
					this.itemColor=getItemColor(responseData);
					this.content=this.getContent(this.itemColor)
					this.actions.read=true
				},
				searchItemStocks(page){
					this.search=this.$refs.searchModal.searchData;
					window.axios.get('search_item_variant_stocks/'+this.$route.params.item_varaint_id +
						'?search=' + this.search +'&page=' + page).then((response)=>{
							if(response.data.message=='Loading'){
								showSwalLoading(this);
							}else{
								this.getData(response.data)
							}
						})
					},
					getItemStocks(page){
						window.axios.get( 'item_variant_stocks/'+this.$route.params.item_varaint_id + '?page=' + page ).then(( response ) =>  {
							if(response.data.message=='Loading'){

								showSwalLoading(this);
							}else{
								this.getData(response.data)
							}
						} ).catch( (error) => {
							errorResponse(error,this,'read')
						} );
					}
				},
				created(){
					this.getItemStocks(1);
					checkContentPermission('ItemStock','create',this);
					checkContentPermission('ItemStock','update',this);
				},
			}
		</script>