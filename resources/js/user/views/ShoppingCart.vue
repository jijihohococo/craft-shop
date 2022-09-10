<template>
	
</template>
<script >
	import PageTitle from '../components/PageTitle'
	export default {
		components : {
			PageTitle
		},
		data(){
			return {
				shopping_cart_items : {}
			}
		},
		async created(){
			await this.getShoppingCartItems()
		},
		methods : {
			async getShoppingCartItems(){
				window.axios.get('shopping_cart').then( (response) => {
					this.shopping_cart_items=response.data.shopping_cart_items
				} )
			}
		}
	}
</script>