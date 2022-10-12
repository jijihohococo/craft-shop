<template>
	<div class="item">
		<div class="product" v-for="item in feature_products">
			<div class="product_img">
				<a href="shop-product-detail.html">
					<img 
					:data-src="
					[ item.image==null ? '/images/logo_dark.png' :  
					'/image/item_images/' + item.image]"
					class="lazy" 
					:alt="item.name" 
					>
				</a>
			</div>
			<ItemInfo :item="item" />
		</div>
	</div>
</template>
<script >

	import ItemInfo from './ItemInfo'
	import {horizontalImageCache} from '../../helpers/general.js';
	export default {
		name : 'FeatureProduct',
		components : {
			ItemInfo,
		},
		props : ['feature_products'],
		mounted : function(){
			horizontalImageCache()
		}
}
</script>