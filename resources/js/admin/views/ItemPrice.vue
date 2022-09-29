<template>
	<ContentHeader :header="content" 
	:back_links="[
	{ 'route' : '/admin/item' , 'title' : 'Item' },
	{ 'route' : '/admin/item/variant/'+this.$route.params.item_varaint_id , 'title' : itemColor }
	]" />
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
							@searchData="searchItemPrices"
							/>
							<CreateButton v-if="actions.create" :content="content" :link="'/admin/item/price/create/'+this.$route.params.item_varaint_id" />
						</div>
						<!-- /.card-header -->
						<template v-if="actions.read">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr>
											<th>Price</th>
											<th>Currency</th>
											<th>Operation</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(item_price,key) in item_prices.data">
											<td>{{ item_price.price }}</td>
											<td>{{ item_price.currency_name }}</td>
											<td>
												<EditButton v-if="actions.update && key==0" :content="content" link="item.price.edit" :dataId="item_price.id" />
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!-- /.card-body -->
							<div class="card-footer clearfix">
								<Pagination :page="currentPage" :lastPage="item_prices.last_page" @getData="getItemPrices" @searchData="searchItemPrices" :search="search" :from="item_prices.from" :to="item_prices.to" :total="item_prices.total" />
							</div>
						</template>
					</div>
					<!-- /.card -->
				</div>
			</div>
			<!-- /.row -->
			<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
				<Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Item Price" />
			</div>
		</div>
	</section>
</template>
<script >
	import Pagination from '../components/Pagination';

	import ContentHeader from '../components/ContentHeader';

	import CreateButton from '../components/CreateButton';

	import EditButton from '../components/EditButton';

	import Search from '../components/Search';

	import Error from '../components/Error';

	import Loading from '../components/Loading';

	import { errorResponse , checkContentPermission , showSwalLoading , makeRoute , checkActions , unauthorizedActions , showPageNumber , getItemColor } from '../helpers/check.js';
	export default {
		components: {
			Pagination,
			ContentHeader,
			CreateButton,
			EditButton,
			Error,
			Loading,
			Search
		},
		data () {
			return {
				content : null,
				item_prices : {},
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
				return data + "'s Price"
			},
			checkAuthorizeActions(actions){
				return checkActions(actions);
			},
			checkUnauthorizeActions(actions){
				return unauthorizedActions(actions);
			},
			getData(responseData){
				this.item_prices=responseData.item_prices
				this.itemColor=getItemColor(responseData);
				this.content=this.getContent(this.itemColor)
				this.actions.read=true
			},
			searchItemPrices(page){
				window.axios.get('search_item_variant_prices/'+this.$route.params.item_varaint_id + '?page=' + page).then((response)=>{
					if(response.data.message=='Loading'){
						showSwalLoading(this);
					}else{
						this.getData(response.data)
					}
				})
			},
			getItemPrices(page){
				window.axios.get( 'item_variant_prices/'+this.$route.params.item_varaint_id + '?page=' + page ).then(( response ) =>  {
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
			this.getItemPrices(1);
			checkContentPermission('ItemPrice','create',this);
			checkContentPermission('ItemPrice','update',this);
		},
		
	}
</script>