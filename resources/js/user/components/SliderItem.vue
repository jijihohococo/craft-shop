<template>
	<div class="product">
		<div class="product_img">
			<a href="shop-product-detail.html">
				<v-lazy-image 
				:src="showImage(item.image)"
				:alt="item.name" />
			</a>
			<div class="product_action_box">
				<ul class="list_none pr_action_btn">
					<li class="hand_cursor">
						<a @click="addToCart()">
							<i class="icon-basket-loaded"></i>
						Add To Cart</a>
					</li>
					<li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
					<li><router-link :to="{name:'items.detail',params:{id:item.id}}">
						<i class="icon-magnifier-add"></i>
					</router-link></li>
					<WishButton :item_id="item.id" />
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
	import { mixin } from '../common/';
	import WishButton from './WishButton'

	export default  {
		components : {
			ItemInfo,
			VLazyImage,
			WishButton
		},
		mixins: [mixin],
		data(){
			return {
				currentItemVariant : 0
			}
		},
		props : {
			item : {
				type : Object
			}
		},
		methods : {
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