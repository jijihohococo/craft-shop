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
											<td><div v-html="checkString(order.user_name)">
											</div></td>
											<td><div v-html="checkString(order.user_email)">
											</div></td>
											<td><div v-html="checkString(order.delivery_price)">
											</div></td>
											<td><div v-html="checkString(order.address)"></div></td>
											<td><div v-html="checkString(order.status)"></div></td>
											<td><div v-html="checkString(order.created_at)"></div></td>
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

	import { errorResponse , makeRoute , checkContentPermission } from '../helpers/check';

	import { mixin } from '../common/data_list';

	export default {
		data(){
			return {
				content : 'Order',
				orders : {},
				search : null ,
				currentPage : 1 ,
				actions : {
					read : '',
					update : ''
				},
				mainData  : 'orders',
				getMethod : 'getOrders',
			}
		},
		mixins : [mixin],
		mounted : function(){
			this.getOrders(1);
			checkContentPermission(this.content,'update',this);
		},
		methods : {
			searchOrders(page){
				window.axios.get(makeRoute(this,page,'order','search')+ this.search + '&page=' + page).then( (response) => {
					this.getMainData(response)
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},
			getOrders(page){
				window.axios.get(makeRoute(this,page,'order') + page ).then(( response ) =>  {
					this.getMainData(response)
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},

		}
	}
</script>