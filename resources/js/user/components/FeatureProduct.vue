<template>
	<div class="product">
		<div class="product_img">
			<a href="shop-product-detail.html">
				<v-lazy-image 
				:src="showImage(item.image)"
				:alt="item.name" />
			</a>
		</div>
		<ItemInfo :item="item" />
	</div>
</template>
<script >

	import ItemInfo from './ItemInfo'
	import VLazyImage from "v-lazy-image"
	export default {
		name : 'FeatureProduct',
		components : {
			ItemInfo,
			VLazyImage
		},
		props : {
			item : {
				type : Object
			}
		},
		methods : {
			showImage(image){
				return image==null ? '/images/logo_dark.png' :
				'/image/item_images/' + image
			}
		}
	}
</script>