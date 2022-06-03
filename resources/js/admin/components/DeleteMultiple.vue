<template>
	<a v-if="deleteArrayData.length>0" :class="[ routeName.includes('_bin') ? 'btn btn-secondary ml-3' : 'btn btn-danger ml-3']" v-on:click="deleteManyData()" >{{ routeName.includes('_bin') ? 'Restore' : 'Delete' }}</a>
</template>
<script >
	import { deleteMultipleData , makeDeleteAt } from '../helpers/check.js';
	export default {
		props : ['deleteArrayData','objectArrayData','routeName','request'],
		methods : {
			deleteManyData(){
				let route=null;
				let data=null;
				if(this.$props.routeName.includes('_bin')){
					route='restore_'+this.$props.request;
				}else{
					route='delete_'+this.$props.request;
					data='not_null';
				}
				window.axios.delete(route+"?"+
					this.$props.request +"="+
					this.$props.deleteArrayData ).then(( response ) =>  {
					makeDeleteAt(this.$props.objectArrayData,data )
					deleteMultipleData(this.$props.deleteArrayData)
					deleteMultipleData(this.$props.objectArrayData)
				})
			}
		}
	}
</script>