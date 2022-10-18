<template>
	<ContentHeader :header="content" />
	<section class="content">
		<div class="container-fluid">
			<div v-if="checkAuthorizeActions(actions)" class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header row">
							<Search 
							:read="actions.read"
							ref="searchModal"
							@searchData="searchOrders"
							/>
						</div>
						<template v-if="actions.read">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr>
											<th>User Name</th>
											<th>User Email</th>
											<th>Delivery Price</th>
											<th>Address</th>
											<th>Status</th>
											<th>Created At</th>
											<th>Operation</th>
										</tr>
									</thead>
									<tbody v-for="order in orders.data" :key="order.id">
										<tr>
											<td>{{ order.user_name }}</td>
											<td>{{ order.user_email }}</td>
											<td>{{ order.delivery_price }}</td>
											<td>{{ order.address }}</td>
											<td>{{ order.status }}</td>
											<td>{{ order.created_at }}</td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="card-footer clearfix">
								<Pagination :page="currentPage" :lastPage="orders.last_page" @getData="getOrders" @searchData="searchOrders" :search="search" :from="orders.from" :to="orders.to" :total="orders.total" />
							</div>
						</template>
					</div>
				</div>
			</div>
			<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
				<Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Order" />
			</div>
		</div>
	</section>
</template>
<script >

	import Pagination from '../../components/Pagination';

	import ContentHeader from '../components/ContentHeader';

	import ViewButton from '../components/ViewButton';

	import Error from '../components/Error';

	import Search from '../components/Search';

	import { errorResponse , showSwalLoading , makeRoute ,  checkActions, unauthorizedActions } from '../helpers/check.js';

	export default {
		components : {
			Pagination ,
			ContentHeader ,
			ViewButton ,
			Error ,
			Search
		},
		data(){
			return {
				content : 'Order',
				orders : {},
				search : null ,
				currentPage : 1 ,
				actions : {
					read : ''
				}
			}
		},
		mounted : function(){
			this.getOrders(1);
		},
		methods : {
			checkAuthorizeActions(actions){
				return checkActions(actions);
			},
			checkUnauthorizeActions(actions){
				return unauthorizedActions(actions);
			},
			searchOrders(page){
				window.axios.get(makeRoute(this,page,'order','search')+ this.search + '&page=' + page).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.orders=response.data.orders
						this.actions.read=true;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},
			getOrders(page){
				window.axios.get(makeRoute(this,page,'order') + page ).then(( response ) =>  {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.orders=response.data.orders
						this.actions.read=true;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},

		}
	}
</script>