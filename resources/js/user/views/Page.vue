<template>
	
</template>
<script >
	export default {
		data(){
			return {
				page : {}
			}
		},
		async created(){
			window.scrollTo(0, 0);
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