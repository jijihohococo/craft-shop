<template>
	<a v-if="deleteAt==null" class="btn btn-danger btn-sm" data-toggle="modal" :data-target="['#deleteModal'+id]">
		<i class="fas fa-trash">
		</i>
		Delete
	</a>
	<a v-else class="btn btn-warning btn-sm" data-toggle="modal" :data-target="['#deleteModal'+id]">
		<i class="fas fa-recycle">
		</i>
		Restore
	</a>
	<!-- Modal -->
	<div class="modal fade" :id="['deleteModal'+id]" tabindex="-1" role="dialog" :aria-labelledby="['exampleModalLabel'+id]" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" :id="['exampleModalLabel'+id]">
						{{ deleteAt==null ? 'Delete' : 'Restore' }}
					</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					{{ deleteAt==null ? 'Are you sure to delete?' : 'Are you sure to restore?' }}
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
					<button type="button" :class="[deleteAt==null ? 'btn btn-danger' : 'btn btn-warning' ]" v-on:click="deleteData">Yes</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script >

	import { errorResponse } from '../helpers/check.js';

	export default {
		name : 'Delete',
		emits : ['update'],
		data(){
			return {
				authorized : false ,
			}
		},
		props : {
			content : {
				type : String
			},
			deleteLink : {
				type : String
			},
			restoreLink : {
				type : String
			},
			deleteAt : {
				type : String
			},
			id : {
				type : Number
			},
			objectData : {
				type : Object
			}
		},
		methods : {
			deleteData(){
				window.axios.delete( 
					this.$props.deleteAt==null ? this.$props.deleteLink.toString() :
					this.$props.restoreLink.toString() ).then( (response) => {
						this.deleteMessage=response.data.message;
						let deletedTime=response.data.deleted_at;
						this.$swal( this.$props.deleteAt==null ? 'Delete' : 'Restore' ,
							this.deleteMessage ,
							this.$props.deleteAt==null ? 'error' : 'success'  );
						$('#deleteModal'+this.$props.id).modal('hide')
						this.$emit('update',this.$props.objectData,deletedTime)
					} ).catch( (error) => {
						errorResponse(error,this,'delete')
					} )

				}
			}
		}
	</script>