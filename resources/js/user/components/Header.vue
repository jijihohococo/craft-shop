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
		<Search :categories="categories.data" />
		<div class="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
			<div class="container">
				<div class="row"> 
					<Menu :categories="categories.data" />
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
								<li><router-link to="/wishlist" class="nav-link"><i class="linearicons-heart"></i><span class="wishlist_count">{{ wishlist_items.data.length }}</span></router-link></li>
								<ShoppingCartMenu />
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

	import ShoppingCartMenu from './ShoppingCartMenu'

	import { userLogin } from '../../store';

	import { common_mixin } from '../../common/'

	import {wishlist_items,categories,menu_show,mobile} from '../store/';

	export default {
		components: {
			Search,
			Menu,
			Language,
			ShoppingCartMenu
		},
		data(){
			return {
				userLogin,
				categories ,
				wishlist_items ,
				menu_show,
				mobile
			}
		},
		mixins: [common_mixin],
		methods : {
			getCategories(){
				window.axios.get( 'categories' ).then( (response) => {
					this.categories.changeData(response.data.categories)
				} )
			},
			handleScroll(event){
				var scroll = $(window).scrollTop();
				if (scroll >= 150) {
					if(this.$route.name=='home' && this.mobile.data==false){
						this.menu_show.data=false;
					}
					$('header.fixed-top').addClass('nav-fixed');
					$('.header_sticky_bar').removeClass('d-none');
					$('header.no-sticky').removeClass('nav-fixed');
				} else {
					if(this.$route.name=='home' && this.mobile.data==false ){
						this.menu_show.data=true;
					}
					$('header.fixed-top').removeClass('nav-fixed');
					$('.header_sticky_bar').addClass('d-none');
				}
			}
		},
		created(){
			this.getCategories()
			if ($('.header_wrap').hasClass("fixed-top") && !$('.header_wrap').hasClass("transparent_header") && !$('.header_wrap').hasClass("no-sticky")) {
				$(".header_wrap").before('<div class="header_sticky_bar d-none"></div>');
			}
			window.addEventListener('scroll',this.handleScroll)
		},
	}
</script>