<template>
	<ContentHeader :header="main_content" />
	<section class="content">
		<div class="container-fluid">
			<!-- /.row -->
			<div v-if="checkAuthorizeActions(actions)" class="row">
				<div class="col-12">
					<div class="card">
						<!-- /.card-header -->
						<template v-if="actions.read">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr>
											<th>Name</th>
											<th>Operation</th>
										</tr>
									</thead>
									<tbody>
										<tr >
											<td>FAQ</td>
											<td class="text-left">
												<router-link class="btn btn-primary btn-sm mr-3"  
												:to="{name:'faq.edit'}" >
												<i class="fas fa-pencil-alt">
												</i>
												Edit
											</router-link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- /.card-body -->
					</template>
				</div>
				<!-- /.card -->
			</div>
		</div>
		<!-- /.row -->
		<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
			<Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Faq" />
		</div>
	</div>
</section>
</template>
<script >

	import ContentHeader from '../components/ContentHeader';

	import EditButton from '../components/EditButton';

	import ViewButton from '../components/ViewButton';

	import Error from '../components/Error';

	import VLazyImage from "v-lazy-image";

	import { errorResponse , checkContentPermission , checkActions , unauthorizedActions } from '../helpers/check';

	import { showSwalLoading } from  '../../helpers/general'

	export default {
		components: {
			ContentHeader,
			EditButton,
			ViewButton,
			Error,
			VLazyImage
		},
		data () {
			return {
				main_content : 'FAQ',
				content : 'Faq' ,
				actions : {
					read : '' ,
					update : ''
				}
			}
		},
		methods :{
			checkAuthorizeActions(actions){
				return checkActions(actions);
			},
			checkUnauthorizeActions(actions){
				return actions.read==false && actions.update==false;
			},
			getFaqs(){
				window.axios.get( 'faqs' ).then(( response ) =>  {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.actions.read=true;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} );
			},

		},
		created(){
			this.getFaqs();
			checkContentPermission(this.content,'update',this);
		}
	}
</script>