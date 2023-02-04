<template>
	<PromotionBox />
	<Header />
	<router-view />
	<Footer />
</template>
<script >
	import PromotionBox from './user/components/PromotionBox';
	import Header from './user/components/Header';
	import Footer from './user/components/Footer';
	import { mixin } from './user/common/';
	import {userId} from './store';
	export default {
		components: {
			PromotionBox,
			Header,
			Footer
		},
		mixins: [mixin],
		data(){
			return {userId}
		},
		async created(){
			await this.getUserId()
			await this.getWishListItems()
			await this.getShoppingCartItems()
		},
		methods : {
			async getUserId(){
				window.axios.get('user_id',function(response){
					this.userId.changeData(response.data.user_id)
				})
			}
		}
		// mounted() {
		// 	const plugin = document.createElement("script");
		// 	plugin.setAttribute(
		// 		"src",
		// 		"/user/js/scripts.js"
		// 		);
		// 	plugin.async = true;
		// 	document.head.appendChild(plugin);
		// }
		
	}
</script>