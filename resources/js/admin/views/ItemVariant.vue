<template>
	<component is="style">
		.modal-dialog-person {
			width: 80% !important;
			height: 100% !important;
			padding: 0 !important;
			max-width: none !important;
		}
		.item-image , .item-stock{
			cursor: pointer
		}
		.fileinput-upload-button, .kv-file-upload{
			display: none !important;
		}
	</component>
	<ContentHeader :header="itemColor" 
	:back_links="[
	{ 'route' : '/admin/item' , 'title' : 'Item' }
	]"  />
	<section class="content">
		<div class="container-fluid">
			<!-- Small boxes (Stat box) -->
			<div class="row">
				<a  class="item-image">
					<div class="col-lg-3 col-6">
						<div class="small-box bg-warning">
							<div class="inner">
								<h3>Images</h3>

								<p>Upload</p>
							</div>
							<div class="icon">
								<i class="ion ion-android-image"></i>
							</div>
							<a class="small-box-footer"></a>
						</div>
					</div>
				</a>
				<a class="item-stock">
					<div class="col-lg-3 col-6">
						<div class="small-box bg-info">
							<div class="inner">
								<h3>Stock</h3>
								<p>Input</p>
							</div>
							<div class="icon">
								<i class="ion ion-briefcase"></i>
							</div>
							<a class="small-box-footer"></a>
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>
	<div class="modal fade" id="itemImageModal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-person">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Images Upload</h4>
				</div>
				<!-- -->
				<div class="modal-body">
					<File
					:changeData="fileChange"
					@change="setPic"
					:pics="pics" 
					@removed="removePics" 
					:multiple="true"
					storage_path='image/item_images/'
					delete_path='admin_api/item_image_delete/'
					delete_all_path='delete_item_images/'
					/>	
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" style="margin-right:50%;" v-on:click="uploadPics">
						<i class="ion ion-upload"></i>
					Upload</button>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script >
	
	import File from '../components/File'
	import ContentHeader from '../components/ContentHeader'
	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	export default {
		components: {
			File,
			ContentHeader
		},
		data(){
			return {
				itemColor : null ,
				pics : [] ,
				formData : new FormData ,
				fileChange : 0
			}
		},
		async created(){
			await this.getItemWithColor();
		},
		mounted : function(){
			let vm=this;
			let id=this.$route.params.id;
			$('.item-stock').click(function(){
				vm.$router.push({
					path : '/admin/item_stock/'+id
				})
			})
			$('.item-image').click(function(){
				$("#itemImageModal").modal("show");
				window.axios.get( 'item_variant_images/' + id ).then(( response ) =>  {
					vm.pics=response.data.images
				}).catch((error)=> {
					errorResponse(error,this,'read')
				})
			})
		},
		methods : {
			goToItemStock(){
				this.$router.push({path: '/admin/item_stock/'+this.$route.params.id })
			},
			async getItemWithColor(){
				window.axios.get('item_variants/'+this.$route.params.id).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.itemColor=response.data.item_variant.item_name + "'s " + response.data.item_variant.color_name;
					}
				} )
			},
			removePics(){
				this.pics=[];
			},
			setPic(event){
				if(this.formData.getAll('pics[]').length>0){
					this.formData.delete('pics[]')
				}
				Array.from(event.target.files).forEach(file => {
					this.formData.append('pics[]',file)
				});
			},
			uploadPics(){
				window.axios.post("upload_item_variant_images/"+this.$route.params.id,this.formData).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						$('#itemImageModal').modal('hide')
						this.fileChange++;
					}
				} ).catch((error)=> {
					errorResponse(error,this,'read')
				})
			}
		}
	}
</script>