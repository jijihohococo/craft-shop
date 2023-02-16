<template>
	
</template>
<script >
	import { mix } from '../common/ui'
	export default {
		data(){
			return {
				page : {}
			}
		},
		mixins : [mix],
		async created(){
			await this.getPageData()
		},
		methods : {
			async getPageData(){
				window.axios.get('page/'+this.$route.params.link).then( (response) => {
					this.page=response.data.page
				} )
			}
		}
	}
</script>