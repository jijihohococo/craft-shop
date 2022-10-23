<template>
	<ContentHeader :header="content"
	:back_links="[
	{'route':getLink(this.$route.params.model),'title':this.$route.params.model}
	]"
	 />
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
										<th>Action</th>
										<th>Admin Name</th>
										<th>Admin Email</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="transaction in transactions.data" :key="transaction.id">
										<td>{{ transaction.action }}</td>
										<td>{{ transaction.admin_name }}</td>
										<td>{{ transaction.admin_email }}</td>
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
	import Pagination from '../../components/Pagination';

	import ContentHeader from '../components/ContentHeader';

	import Error from '../components/Error';

	import { errorResponse , checkContentPermission , getModel } from '../helpers/check';

	import { showSwalLoading } from  '../../helpers/general'

	export default {
		components: {
			Pagination,
			ContentHeader,
			Error
		},
		data(){
			return {
				content : 'Transactions of '+this.$route.params.name+' '+this.$route.params.model,
				transactions : {},
				search : null ,
				currentPage : 1 ,
				actions : {
					read : ''
				}
			}
		},
		mounted : function(){
			this.getTransactions(1);
		},
		methods :{
			getLink(model){
				return '/admin/' +getModel(model).
				replace(/([A-Z])/g,'_$1').trim().toLowerCase();
			},
			getTransactions(page=1){
				this.currentPage=page;
				window.axios.get("transactions/"+this.$route.params.model+"/"+this.$route.params.model_id+"?page=" + page ).then(( response ) =>  {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.transactions=response.data.transactions
						this.actions.read=true;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},
			searchTransactions(page){
				this.currentPage=page;
				window.axios.get('transaction_search/'+this.$route.params.model+'/'+this.$route.params.model_id +'?search=' + this.search + '&page=' + page ).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.transactions=response.data.transactions
						this.actions.read=true
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read');
				} )
			}
		}
	}
</script>