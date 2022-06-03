<template>
	<a v-if="route.name==content" v-on:click="changePage()" class="btn btn-secondary" >Trash</a>
	<a v-else v-on:click="changePage()" class="btn btn-primary" >No Trash</a>
</template>
<script >
	import { showTrashPage } from '../helpers/check.js';
	export default {
		props : ['router','route','content'],
		emits : ['getData'],
		methods : {
			changePage(){
				showTrashPage(this.$props.route,this.$props.router,this.$props.content)
				this.$emit('getData')
			}
		}
	}
</script>