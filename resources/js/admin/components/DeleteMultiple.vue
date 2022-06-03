<template>
	<a v-if="deleteArrayData.length>0" :class="[ routeName.includes('_bin') ? 'btn btn-secondary ml-3' : 'btn btn-danger ml-3']" v-on:click="deleteManyData()" >{{ routeName.includes('_bin') ? 'Restore' : 'Delete' }}</a>
</template>
<script >
	import { deleteMultipleData , makeDeleteAt } from '../helpers/check.js';
	export default {
		props : ['deleteArrayData','objectArrayData','routeName'],
		methods : {
			deleteManyData(){
					makeDeleteAt(this.$props.objectArrayData,
						this.$props.routeName.includes('_bin') ?null :'not_null')
					deleteMultipleData(this.$props.deleteArrayData)
					deleteMultipleData(this.$props.objectArrayData)
			}
		}
	}
</script>