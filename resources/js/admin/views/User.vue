<template>
	<ContentHeader :header="content" />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div v-if="checkAuthorizeActions(actions)" class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header row">
							<Search 
							:read="actions.read"
							ref="searchModal"
							@searchData="searchUsers"
							/>
						</div>
						<template v-if="actions.read">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr>
											<th>User Name</th>
											<th>User Email</th>
											<th>Created At</th>
										</tr>
									</thead>
									<tbody v-for="user in users.data" :key="user.id">
										<tr>
											<td>{{ user.name }}</td>
											<td>{{ user.email }}</td>
											<td>{{ user.created_at }}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="card-footer clearfix">
								<Pagination :page="currentPage" :lastPage="users.last_page" @getData="getUsers" @searchData="searchUsers" :search="search" :from="users.from" :to="users.to" :total="users.total" />
							</div>
						</template>
					</div>
				</div>
			</div>
			<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
				<Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for User" />
			</div>
		</div>
	</section>
</template>
<script >
	import Pagination from '../components/Pagination';

	import ContentHeader from '../components/ContentHeader';

	import ViewButton from '../components/ViewButton';

	import Error from '../components/Error';

	import Loading from '../components/Loading';

	import Search from '../components/Search';

	import { errorResponse , showSwalLoading , makeRoute ,  checkActions, unauthorizedActions } from '../helpers/check.js';
	export default {
		components : {
			Pagination ,
			ContentHeader ,
			ViewButton ,
			Error ,
			Loading ,
			Search
		},
		data(){
			return {
				content : 'User',
				users : {},
				search : null ,
				currentPage : 1 ,
				actions : {
					read : ''
				}
			}
		},
		created(){
			this.getUsers(1);
		},
		methods : {
			checkAuthorizeActions(actions){
				return checkActions(actions);
			},
			checkUnauthorizeActions(actions){
				return unauthorizedActions(actions);
			},
			searchUsers(page){
				window.axios.get(makeRoute(this,page,'user','search')+ this.search + '&page=' + page).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.users=response.data.users
						this.actions.read=true;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},
			getUsers(page){
				window.axios.get(makeRoute(this,page,'user') + page ).then(( response ) =>  {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.users=response.data.users
						this.actions.read=true;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},

		}
	}
</script>