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
	import { mixin } from '../common/';

	export default  {
		components : {
			ItemInfo,
			VLazyImage,
		},
		mixins: [mixin],
		props : {
			item : {
				type : Object
			}
		}
	}
</script>