<template>
	<a v-if="deleteArrayData.length>0" :class="[ routeName.includes('_bin') ? 'btn btn-warning ml-3' : 'btn btn-danger ml-3']" v-on:click="deleteManyData()" >{{ routeName.includes('_bin') ? 'Restore' : 'Delete' }}</a>
</template>
<script >
	import { deleteMultipleData , deleteFromArray , errorResponse } from '../helpers/check.js';
	export default {
		props : ['deleteArrayData','objectArrayData','routeName','request','mainData'],
		emits : ['freshData'],
		methods : {
			deleteManyData(){
				let route=this.$props.routeName.includes('_bin') ?
				'restore_'+this.$props.request :
				'delete_'+this.$props.request;
				window.axios.delete(route+"?"+
					this.$props.request +"="+
					this.$props.deleteArrayData ).then(( response ) =>  {
						this.$props.objectArrayData.map((object)=>{
							deleteFromArray(this.$props.mainData,object)
						})
						deleteMultipleData(this.$props.deleteArrayData)
						deleteMultipleData(this.$props.objectArrayData)
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$emit('freshData',null);
					}).catch( (error) => {
						errorResponse(error,this,'delete')
					} )
				}
			}
		}
	</script>