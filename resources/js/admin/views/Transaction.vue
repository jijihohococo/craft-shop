<template>
	<ContentHeader :header="content"
	v-if="this.$route.params.model=='CurrencyRate'"
	:back_links="[
	{ 'route' : '/admin/currency' , 'title' : 'Currency' },
	{ 'route' : '/admin/currency/currency_rate/'+this.$route.params.currency_id , 'title' : this.$route.params.main_content }
	]"
	/>
	<ContentHeader :header="content"
	v-else-if="this.$route.params.model=='ItemStock' || 
	this.$route.params.model=='ItemPrice'"
	:back_links="[
	{ 'route' : '/admin/item' , 'title' : 'Item' },
	{ 'route' : '/admin/item/variant/'+this.$route.params.item_id , 'title' : this.$route.params.name },
	{ 'route' : getItemRelateRoute(this.$route.params.model)+this.$route.params.item_id , 'title' : getItemRelateData(this.$route.params.model,this.$route.params.name)  }
	]"
	/>
	<ContentHeader :header="content"
	v-else
	:back_links="[
	{'route':getLink(this.$route.params.model),'title':this.$route.params.model}
	]" />
	<section class="content">
		<div class="container-fluid">
			<div v-if="actions.read==true" class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header row">
							<div v-if="actions.read" class="card-tools col-8 mt-1">
								<form v-on:submit.prevent="searchTransactions(1)">
									<div class="input-group" >
										<input type="text" name="table_search" v-model="search" class="form-control float-right" placeholder="Search">

										<div class="input-group-append">
											<button type="submit" class="btn btn-default">
												<i class="fas fa-search"></i>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="card-body table-responsive p-0">
							<table class="table table-hover text-nowrap">
								<thead>
									<tr>
										<th>Admin Name</th>
										<th>Admin Email</th>
										<th>Action</th>
										<th>Created At</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="transaction in transactions.data" :key="transaction.id">
										<td><div v-html="checkString(transaction.admin_name)">
										</div></td>
										<td><div v-html="checkString(transaction.admin_email)">
										</div></td>
										<th><div v-html="checkString(transaction.action)">
										</div></th>
										<th><div v-html="checkString(transaction.created_at)">
										</div></th>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="card-footer clearfix">
							<Pagination :page="currentPage" :lastPage="transactions.last_page" @getData="getTransactions" @searchData="searchTransactions" :search="search" :from="transactions.from" :to="transactions.to" :total="transactions.total" />
						</div>
					</div>
				</div>
			</div>
			<div v-else-if="actions.read==false" class="card card-default">
				<Error :httpStatus="403" title="Permission Denied" description="You are not allowed to view transactions" />
			</div>
		</div>
	</section>
</template>
<script >

	import { errorResponse , checkContentPermission , getModel } from '../helpers/check';

	import { mixin } from '../common/data_list';

	export default {
		data(){
			return {
				content : this.getContent(),
				transactions : {},
				search : null ,
				currentPage : 1 ,
				actions : {
					read : ''
				},
				mainData  : 'transactions',
			}
		},
		mixins : [mixin],
		mounted : function(){
			this.getTransactions(1);
		},
		methods :{
			getItemRelateRoute(model){
				switch(model){
					case 'ItemPrice':
					return '/admin/item/price/'
					break;

					case 'ItemStock':
					return '/admin/item/stock/'
					break;
				}
			},
			getItemRelateData(model,name){
				switch(model){
					case 'ItemPrice':
					return name +"'s Price";
					break;

					case 'ItemStock':
					return name +"'s Stock";
					break;
				}
			},
			getContent(){
				if(this.$route.params.model=='CurrencyRate' ||
				this.$route.params.model=='ItemStock' ){
					return 'Transactions of '+this.$route.params.name;
				}else{
					return 'Transactions of '+this.$route.params.name+' '+
					this.$route.params.model;
				}
			},
			getLink(model){
				let newModel=getModel(model)
				return '/admin/' +newModel.
				replace(/([A-Z])/g,'_$1').trim().toLowerCase();
			},
			getTransactions(page=1){
				this.currentPage=page;
				window.axios.get("transactions/"+this.$route.params.model+"/"+this.$route.params.model_id+"?page=" + page ).then(( response ) =>  {
					this.getMainData(response)
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},
			searchTransactions(page){
				this.currentPage=page;
				window.axios.get('transaction_search/'+this.$route.params.model+'/'+this.$route.params.model_id +'?search=' + this.search + '&page=' + page ).then( (response) => {
					this.getMainData(response)
				} ).catch( (error) => {
					errorResponse(error,this,'read');
				} )
			}
		}
	}
</script>