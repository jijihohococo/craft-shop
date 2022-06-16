<template>
	<component is="style">
		.modal-dialog-person {
			width: 80% !important;
			height: 100% !important;
			padding: 0 !important;
			max-width: none !important;
		}
	</component>
	<section class="content">
		<div class="container-fluid">
			<!-- Small boxes (Stat box) -->
			<div class="row">
				<a  class="item-image">
					<div class="col-lg-3 col-6">
						<div class="small-box bg-info">
							<div class="inner">
								<h3>150</h3>

								<p>Today Orders</p>
							</div>
							<div class="icon">
								<i class="ion ion-bag"></i>
							</div>
							<a class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
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
				<div class="modal-body">
					<File
					:pics="pics" 
					@removed="removePics" 
					:multiple="true"
					storage_path='storage/item_images/'
					delete_path='admin_api/item_image_delete/'
					delete_all_path='delete_item_images/'  />	
				</div>
			</div>
		</div>
	</div>
</template>
<script >
	import File from '../components/File'
	import CreateEditItemVariantImage from './CreateEditItemVariantImage'
	export default {
		components: {
			File,
			CreateEditItemVariantImage
		},
		data(){
			return {
				pics : [] ,
				formData : new FormData
			}
		},
		mounted : function(){
			let vm=this;
			$('.item-image').click(function(){
				$("#itemImageModal").modal("show");
				window.axios.get( 'item_variant_images/' + vm.$route.params.id ).then(( response ) =>  {
					vm.pics=response.data.images
				})
			})
		},
		methods : {
			removePics(){
				this.pics=[];
			},
			// setPic(event){
			// 	if(this.formData.getAll('pics[]').length>0){
			// 		this.formData.delete('pics[]')
			// 	}
			// 	Array.from(event.target.files).forEach(file => {
			// 		this.formData.append('pics[]',file)
			// 	});
			// }
		}
	}
</script>