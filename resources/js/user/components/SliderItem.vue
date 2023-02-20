<template>
	<div class="product">
		<router-link :to="{name:'items.detail',params:{id:item.link}}">
			<div class="product_img hand_cursor">
				<v-lazy-image 
				:src="showImage(item.image)"
				:alt="item.name" />
			</div>
		</router-link>
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