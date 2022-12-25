<template>
	<div v-if="normal_price!==sale_price" class="product_price">
		<span class="price">
			{{ thousandSeprator(showItemPrice(sale_price)) }} MMK
		</span>
		<del>{{ thousandSeprator(showItemPrice(normal_price)) }} MMK</del>
		<div class="on_sale">
			<span>{{ showItemPrice(showItemPromotionPercentage(normal_price,sale_price)) }}% Off</span>
		</div>
	</div>
	<div v-else class="product_price">
		<span class="price">
			{{ thousandSeprator(showItemPrice(sale_price)) }} MMK
		</span>
	</div>
</template>

<script >
	import { showPromotionPercentage } from '../helpers/general.js';
	import { common_mixin } from '../../common/'
	export default {
		props : ['normal_price','sale_price'] ,
		mixins: [common_mixin],
		methods : {
			showItemPromotionPercentage(normalPrice,salePrice){
				return showPromotionPercentage(normalPrice,salePrice)
			}
		}
	}
</script>