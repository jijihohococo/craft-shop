<template>
	<div class="item">
		<div class="product" v-for="item in feature_products">
			<div class="product_img">
				<a href="shop-product-detail.html">
					<Image 
						path="/image/item_images"
						:pic="item.image"
						:alt_name="item.name" />
				</a>
			</div>
			<ItemInfo :item="item" />
		</div>
	</div>
</template>
<script >

	import ItemInfo from './ItemInfo'
	import Image from '../../components/Image';

	export default {
		name : 'FeatureProduct',
		components : {
			ItemInfo,
			Image
		},
		props : ['feature_products']
	}
</script>