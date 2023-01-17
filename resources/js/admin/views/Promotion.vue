<template>
	<ContentHeader :header="content" />
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
											<th>Promo Code</th>
											<th>Promotion Start Time</th>
											<th>Promotion End Time</th>
											<th>Created At</th>
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
												<td><div v-html="checkString(promotion.name)">
												</div></td>
												<td><div v-html="checkString(promotion.promo_code)">
												</div></td>
												<td><div v-html="checkString(promotion.promotion_start_time)">
												</div></td>
												<td>
													<div v-html="checkString(promotion.promotion_end_time)">
													</div>
												</td>
												<td><div v-html="checkString(promotion.created_at)">
												</div></td>
												<td><div v-html="checkString(promotion.deleted_at)">
												</div></td>
												<td class="text-left">
													<ViewButton :data_name="promotion.name" 
													:data_model="content" :data_id="promotion.id" />
													<EditButton v-if="actions.update && promotion.deleted_at==null" :content="content" link="promotion.edit" :dataId="promotion.id" />

													<Delete v-if="actions.delete" :content="content" :deleteAt="promotion.deleted_at" :deleteLink="'promotions/'+promotion.id" :restoreLink="'promotion_restore/'+promotion.id"
													:id="promotion.id"
													:objectData="promotion" @update="updateData" />
													<EditSeoButton 
                                        :content="content"
                                        :content_id="promotion.id"/>
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
		import { errorResponse , checkContentPermission , makeRoute } from '../helpers/check';

		import { mixin } from '../common/data_list';
		
		export default {
			data () {
				return {
					content : 'Promotion',
					mainData : 'promotions',
					getMethod : 'getPromotions',
					promotions : {}
				}
			},
			mixins: [mixin],
			methods :{
				getPromotions(page){
					window.axios.get(makeRoute(this,page,'promotion') + page ).then(( response ) =>  {
						this.getMainData(response)
					} ).catch( (error) => {
						errorResponse(error,this,'read')
					} );
				},
				searchPromotions(page){
					window.axios.get(makeRoute(this,page,'promotion','search') + this.search + '&page=' + page ).then( (response) => {
						this.getMainData(response)
					} ).catch( (error) => {
						errorResponse(error,this,'read')
					} )
				}
			},
			mounted : function(){
				this.getPromotions(1);
				checkContentPermission(this.content,'create',this);
				checkContentPermission(this.content,'update',this);
				checkContentPermission(this.content,'delete',this);
			}

		}
	</script>