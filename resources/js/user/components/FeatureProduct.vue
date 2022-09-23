<template>
	<div class="item">
		<div class="product" v-for="item in feature_products">
			<div class="product_img">
				<a href="shop-product-detail.html">
					<img :src="'/image/item_images/'+item.image" :alt="item.name">
				</a>
			</div>
			<ItemInfo :item="item" />
		</div>
	</div>
</template>
<script >

	import ItemInfo from './ItemInfo'

	export default {
		name : 'FeatureProduct',
		components : {
			ItemInfo
		},
		props : ['feature_products']
	}
</script>