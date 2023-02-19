<template>
	<div class="main_content">
		<PageTitle :title="page.name" />
		<div v-html="page.description"></div>
	</div>
</template>
<script >
	import PageTitle from '../components/PageTitle'
	import { mix } from '../common/ui'
	export default {
		components : {
			PageTitle
		},
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