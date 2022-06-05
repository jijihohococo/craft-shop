<template>
	<a v-if="route.name==content" v-on:click="changePage()" class="btn btn-secondary" >Trash</a>
	<a v-else v-on:click="changePage()" class="btn btn-primary" >No Trash</a>
</template>
<script >
	import { showTrashPage , deleteMultipleData } from '../helpers/check.js';
	export default {
		props : ['router','route','content','deleteArrayData','objectArrayData'],
		emits : ['getData'],
		methods : {
			changePage(){
				deleteMultipleData(this.$props.deleteArrayData)
				deleteMultipleData(this.$props.objectArrayData)
				showTrashPage(this.$props.route,this.$props.router,this.$props.content)
				this.$emit('getData',1)
			}
		}
	}
</script>