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
							@searchData="searchPromotions"
							/>
							<CreateButton v-if="actions.create" :content="content" link="/admin/promotion/create" />
						</div>
						<div class="card-header row">
							<Trash :route="this.$route"
							:router="this.$router"
							content='promotion'
							:deleteArrayData="deleteData"
							:objectArrayData="multipleData"
							@getData="getPromotions" />
							<DeleteMultiple
							v-if="actions.delete" 
							:deleteArrayData="deleteData"
							:objectArrayData="multipleData"
							:routeName="this.$route.name"
							:mainData="promotions.data"
							request="promotions"
							@freshData="freshPage" />
						</div>
						<!-- /.card-header -->
						<template v-if="actions.read">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr>
											<th>
												<DeleteAllCheck
												v-if="actions.delete"
												:deleteArrayData="deleteData"
												@selectAll="selectChecks"
												@cancelAll="cancelChecks"
												:lengthData="promotions.data.length"
												ref="deleteAll"
												/>
											</th>
											<th>Name</th>
											<th>Promotion Start Time</th>
											<th>Promotion End Time</th>
											<th>Deleted At</th>
											<th>Operation</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="promotion in promotions.data" :key="promotion.id">
											<td><DeleteCheck
												v-if="actions.delete"
												:objectData="promotion"
												:deleteArrayData="deleteData"
												:objectArrayData="multipleData"
												ref="deleteCheck"
												/></td>
												<td>{{ promotion.name }}</td>
												<td>{{ promotion.promotion_start_time }}</td>
												<td>
													{{ promotion.promotion_end_time }}
												</td>
												<td>{{ promotion.deleted_at }}</td>
												<td class="text-left">
													<ViewButton :data_name="promotion.name" 
													:data_model="content" :data_id="promotion.id" />
													<EditButton v-if="actions.update && promotion.deleted_at==null" :content="content" link="promotion.edit" :dataId="promotion.id" />

													<Delete v-if="actions.delete" :content="content" :deleteAt="promotion.deleted_at" :deleteLink="'promotions/'+promotion.id" :restoreLink="'promotion_restore/'+promotion.id"
													:id="promotion.id"
													:objectData="promotion" @update="updateData" />
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!-- /.card-body -->
								<div class="card-footer clearfix">
									<Pagination :page="currentPage" :lastPage="promotions.last_page"  @getData="getPromotions" @searchData="searchPromotions" :search="search" :from="promotions.from" :to="promotions.to" :total="promotions.total" />
								</div>
							</template>
						</div>
						<!-- /.card -->
					</div>
				</div>
				<!-- /.row -->
				<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
					<Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Promotion" />
				</div>
			</div>
		</section>
	</template>
	<script >
		import Pagination from '../components/Pagination';

		import Delete from '../components/Delete';

		import DeleteAllCheck from '../components/DeleteAllCheck';

		import ContentHeader from '../components/ContentHeader';

		import CreateButton from '../components/CreateButton';

		import EditButton from '../components/EditButton';

		import ViewButton from '../components/ViewButton';

		import Error from '../components/Error';

		import Loading from '../components/Loading';

		import DeleteCheck from '../components/DeleteCheck';

		import Trash from '../components/Trash';

		import DeleteMultiple from '../components/DeleteMultiple';

		import Search from '../components/Search';

		import { errorResponse , checkContentPermission , showSwalLoading , makeSelect , makeRoute , checkActions , deleteFromArray , unauthorizedActions , showPageNumber } from '../helpers/check.js';
		export default {
			components: {
				Search,
				Pagination,
				ContentHeader,
				Delete,
				CreateButton,
				EditButton,
				ViewButton,
				Error,
				Loading,
				DeleteCheck,
				Trash,
				DeleteMultiple,
				DeleteAllCheck
			},
			data () {
				return {
					content : 'Promotion',
					deleteData : [],
					multipleData : [] ,
					promotions : {},
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
			methods :{
				freshPage(){
					this.getPromotions( showPageNumber(this.currentPage) )
				},
				checkAuthorizeActions(actions){
					return checkActions(actions);
				},
				checkUnauthorizeActions(actions){
					return unauthorizedActions(actions);
				},
				selectChecks(){
					if(this.$refs.deleteCheck!==undefined){
						makeSelect(this.$refs.deleteCheck,true)
					}
				},
				cancelChecks(){
					if(this.$refs.deleteCheck!==undefined){
						makeSelect(this.$refs.deleteCheck,false)
					}
				},
				updateData(object){
					deleteFromArray(this.promotions.data,object)
				},
				getPromotions(page){
					window.axios.get(makeRoute(this,page,'promotion') + page ).then(( response ) =>  {
						if(response.data.message=='Loading'){

							showSwalLoading(this);
						}else{
							this.promotions=response.data.promotions
							this.actions.read=true
						}
					} ).catch( (error) => {
						errorResponse(error,this,'read')
					} );
				},
				searchPromotions(page){
					window.axios.get(makeRoute(this,page,'promotion','search') + this.search + '&page=' + page ).then( (response) => {
						if(response.data.message=='Loading'){

							showSwalLoading(this);
						}else{
							this.promotions=response.data.promotions
							this.actions.read=true
						}
					} ).catch( (error) => {
						errorResponse(error,this,'read')
					} )
				}
			},
			created(){
				this.getPromotions(1);
				checkContentPermission(this.content,'create',this);
				checkContentPermission(this.content,'update',this);
				checkContentPermission(this.content,'delete',this);
			}

		}
	</script>