<template>
	<component is="style">
		.modal-dialog-person {
			width: 80% !important;
			height: 100% !important;
			padding: 0 !important;
			max-width: none !important;
		}
		.fileinput-upload-button, .kv-file-upload{
			display: none !important;
		}
	</component>
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Images Upload</h4>
				</div>
				<!-- -->
				<div class="modal-body">
					<File
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
</template>
<script >
	
	import { errorResponse } from '../helpers/check.js';

	import File from './File'

	export default {
		components : {
			File
		},
		data(){
			return {
				pics : [] ,
				formData : new FormData ,
			}
		},
		mounted : function(){
			let id=this.$route.params.id;
			window.axios.get( 'item_variant_images/' + id ).then(( response ) =>  {
				this.pics=response.data.images
			}).catch((error)=> {
				errorResponse(error,this,'read')
			})
		},
		methods : {
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
						this.pics=response.data.images
					}
				} ).catch((error)=> {
					errorResponse(error,this,'read')
				})
			}
		}
	}
</script>