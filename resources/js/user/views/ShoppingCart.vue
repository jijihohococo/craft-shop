<template>
	<li class="dropdown cart_dropdown"><a class="nav-link cart_trigger" href="#" data-toggle="dropdown"><i class="linearicons-cart"></i><span class="cart_count">{{ shopping_cart_items.length }}</span></a>
		<div class="cart_box dropdown-menu dropdown-menu-right">
			<ul class="cart_list">
				<li>
					<a href="#" class="item_remove"><i class="ion-close"></i></a>
					<a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb1.jpg" alt="cart_thumb1">Variable product 001</a>
					<span class="cart_quantity"> 1 x <span class="cart_amount"> <span class="price_symbole">$</span></span>78.00</span>
				</li>
				<li>
					<a href="#" class="item_remove"><i class="ion-close"></i></a>
					<a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb2.jpg" alt="cart_thumb2">Ornare sed consequat</a>
					<span class="cart_quantity"> 1 x <span class="cart_amount"> <span class="price_symbole">$</span></span>81.00</span>
				</li>
			</ul>
			<div class="cart_footer">
				<p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price"> <span class="price_symbole">$</span></span>159.00</p>
				<p class="cart_buttons"><a href="#" class="btn btn-fill-line view-cart">View Cart</a><a href="#" class="btn btn-fill-out checkout">Checkout</a></p>
			</div>
		</div>
	</li>
</template>
<script >
	import PageTitle from '../components/PageTitle'
	import { mixin } from '../common/';

	export default {
		components : {
			PageTitle
		},
		mixins : [mixin],
	}
</script>