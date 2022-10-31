<template>
	<!-- START HEADER -->
	<header class="header_wrap fixed-top header_with_topbar">
		<div class="top-header">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-6">
						<div class="d-flex align-items-center justify-content-center justify-content-md-start">
							<Language />
						</div>
					</div>
					<div class="col-md-6">
						<div class="text-center text-md-right">
							<ul class="header_list">
								<li><a href="compare.html"><i class="ti-control-shuffle"></i><span>{{ translateLang("Compare") }}</span></a></li>
								<li v-if="!userLogin.data">
									<router-link to="/login">
										<i class="ti-user"></i>
										<span>{{ translateLang("Login") }}</span>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Search :categories="categories" />
		<div class="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
			<div class="container">
				<div class="row"> 
					<Menu :categories="categories" />
					<div class="col-lg-9 col-md-8 col-sm-6 col-9">
						<nav class="navbar navbar-expand-lg">
							<button class="navbar-toggler side_navbar_toggler" type="button" data-toggle="collapse" data-target="#navbarSidetoggle" aria-expanded="false"> 
								<span class="ion-android-menu"></span>
							</button> 
							<div class="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
								<ul class="navbar-nav">
									<li><router-link class="nav-link nav_item" to="/shop/all">Shop</router-link></li>
									<li><router-link class="nav-link nav_item" to="/about_us">About Us</router-link></li>
									<li><router-link class="nav-link nav_item" to="/contact_us">Contact Us</router-link></li> 
								</ul>
							</div>
							<ul class="navbar-nav attr-nav align-items-center">
								<li><a href="#" class="nav-link"><i class="linearicons-heart"></i><span class="wishlist_count">{{ number_of_wish }}</span></a></li>
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
							</ul>
							<div class="pr_search_icon">
								<a href="javascript:void(0);" class="nav-link pr_search_trigger"><i class="linearicons-magnifier"></i></a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- END HEADER -->
	<!-- END HEADER -->
	<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
	import Search from './Search'

	import Menu from './Menu'

	import Language from './Language'

	import { userLogin } from '../../store';

	import { common_mixin } from '../../common/'

	export default {
		components: {
			Search,
			Menu,
			Language,
		},
		data(){
			return {
				userLogin,
				categories : {},
				number_of_wish : 0 ,
				shopping_cart_items : {}
			}
		},
		mixins: [common_mixin],
		methods : {
			async getCategories(){
				window.axios.get( 'categories' ).then( (response) => {
					this.categories=response.data.categories
				} )
			},
			async getShoppingCart(){
				window.axios.get( 'shopping_cart' ).then( (response) => {
					this.shopping_cart_items=response.data.shopping_cart_items
				} )
			},
			async getNumberOfWish(){
				window.axios.get('get_wish_number').then( (response) => {
					this.number_of_wish=response.data.number_of_wish
				} )
			}
		},
		async created(){
			await this.getCategories()
			await this.getShoppingCart()
			await this.getNumberOfWish()
		},
	}
</script>