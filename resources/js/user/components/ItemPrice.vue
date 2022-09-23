<template>
	<div v-if="normal_price!==sale_price" class="product_price">
		<span class="price">
			{{ showItemPrice(sale_price) }} MMK
		</span>
		<del>{{ showItemPrice(normal_price) }} MMK</del>
		<div class="on_sale">
			<span>{{ showItemPrice(showItemPromotionPercentage(normal_price,sale_price)) }}% Off</span>
		</div>
	</div>
</template>

<script >
	import { showPrice,showPromotionPercentage } from '../helpers/general.js';
	export default {
		props : ['normal_price','sale_price'] ,
		methods : {
			showItemPrice(price){
				return showPrice(price)
			},
			showItemPromotionPercentage(normalPrice,salePrice){
				return showPromotionPercentage(normalPrice,salePrice)
			}
		}
	}
</script>