<template>
		<router-link :to="link" class="btn btn-primary ml-3 mb-2">{{ 'Create '+content }}</router-link>
</template>
<script >

	import { checkContentPermission } from '../helpers/check.js';
	
	export default {
		props : {
			content : {
				type : String
			},
			link : {
				type : String
			}
		}
	}
</script>