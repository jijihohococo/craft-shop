<template>
	<li class="dropdown cart_dropdown"><a class="nav-link cart_trigger" href="#" data-toggle="dropdown"><i class="linearicons-cart"></i><span class="cart_count">{{ shopping_total_qty.data }}</span></a>
		<div class="cart_box dropdown-menu dropdown-menu-right">
			<ul class="cart_list">
				<li v-for="shopping_cart_item in shopping_cart_items.data">
					<a @click="removeFromCart(shopping_cart_item.id)" class="item_remove btn"><i class="ion-close"></i></a>
					<a href="#">
						<v-lazy-image 
						:src="showImage(shopping_cart_item.item_image)"
						:alt="shopping_cart_item.item_name" />
						{{ shopping_cart_item.item_name }}</a>
						<span class="cart_quantity"> {{ shopping_cart_item.qty }} x 
						{{ thousandSeprator(showItemPrice(shopping_cart_item.sale_price)) }}</span>
					</li>
				</ul>
				<div class="cart_footer" v-if="shopping_total_qty.data>0" >
					<p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price"> </span>{{ thousandSeprator(showItemPrice(shopping_total_price.data*shopping_total_qty.data)) }}</p>
					<p class="cart_buttons"><a href="#" class="btn btn-fill-line view-cart">View Cart</a><a href="#" class="btn btn-fill-out checkout">Checkout</a></p>
				</div>
			</div>
		</li>
	</template>
	<script >

		import { common_mixin } from '../../common/'
		import { mixin } from '../common/';
		import VLazyImage from "v-lazy-image"

		export default {
			name : 'ShoppingCartMenu',
			mixins: [mixin,common_mixin],
			components : {
				VLazyImage
			},
			async created(){
				await this.getShoppingCartItems()
			}
		}
	</script>