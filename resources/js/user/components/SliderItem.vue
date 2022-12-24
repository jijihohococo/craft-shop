<template>
	<component is="style">
		.hand_cursor{
			cursor:pointer;
		}
	</component>
	<div class="product">
		<div class="product_img">
			<a href="shop-product-detail.html">
				<v-lazy-image 
				:src="showImage(item.image)"
				:alt="item.name" />
			</a>
			<div class="product_action_box">
				<ul class="list_none pr_action_btn">
					<li class="add-to-cart hand_cursor">
						<a @click="addToCart()">
							<i class="icon-basket-loaded"></i>
						Add To Cart</a>
					</li>
					<li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
					<li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
					<li><a href="#"><i class="icon-heart"></i></a></li>
				</ul>
			</div>
		</div>
		<ItemInfo :item="item"
		@getData="getColorKey" />
	</div>
</template>
<script >

	import ItemInfo from './ItemInfo'
	import VLazyImage from "v-lazy-image"
	import {shopping_cart_items} from '../store/';
	import { mixin } from '../common/';

	export default  {
		components : {
			ItemInfo,
			VLazyImage
		},
		mixins: [mixin],
		data(){
			return {
				shopping_cart_items,
				currentItemVariant : 0
			}
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
			},
			getColorKey(key){
				this.currentItemVariant=key
			},
			addToCart(){
				let variantId=this.$props.item.variants.split(',')[this.currentItemVariant]
				window.axios.post( 'add_item_to_shopping_cart/'+variantId ).then( (response) => {
					this.$swal( 'Success' ,
						response.data.message ,
						'success'  );
					this.changeShoppingCart(response);
				} )
			}
		}
	}
</script>