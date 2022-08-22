<template>
	<div 
	:class="tab_class" 
	:id="content"
	role="tabpanel"
	:aria-labelledby="content+'-tab'">
		<div class="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}' v-if="items && items.length>0">
			<div class="item" v-for="item in items">
				<div class="product">
					<div class="product_img">
						<a href="shop-product-detail.html">
							<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img1.jpg" alt="product_img1">
						</a>
						<div class="product_action_box">
							<ul class="list_none pr_action_btn">
								<li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
								<li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
								<li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
								<li><a href="#"><i class="icon-heart"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="product_info">
						<h6 class="product_title"><a href="shop-product-detail.html">{{ item.name }}</a></h6>
						<div class="product_price">
							<span class="price">{{ item.price==null ? 0 : item.price }}MMK</span>
							<del>$55.25</del>
							<div class="on_sale">
								<span>35% Off</span>
							</div>
						</div>
						<div class="rating_wrap">
							<div class="rating">
								<div class="product_rate" style="width:80%"></div>
							</div>
							<span class="rating_num">(21)</span>
						</div>
						<div class="pr_desc">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
						</div>
						<div class="pr_switch_wrap">
							<div class="product_color_switch">
								<span class="active" data-color="#87554B"></span>
								<span data-color="#333333"></span>
								<span data-color="#DA323F"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script >
	export default {
		name : 'SliderDetail' ,
		props : {
			content : {
				type : String
			},
			tab_class : {
				type : String
			},
			items : {
				type : Array
			}
		}
	}
</script>