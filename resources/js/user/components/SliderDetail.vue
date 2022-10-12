<template>
	<div 
	:class="['horizContainer '+tab_class]" 
	:id="content"
	role="tabpanel"
	:aria-labelledby="content+'-tab'">
	<div class="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}' v-if="items && items.length>0">
		<div class="item" v-for="item in items">
			<div class="product">
				<div class="product_img">
					<a href="shop-product-detail.html">
						<img 
						:data-src="
						[ item.image==null ? '/images/logo_dark.png' :  '/image/item_images/' + item.image]"
						class="lazy" 
						:alt="item.name" 
						>
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
				<ItemInfo :item="item" />
			</div>
		</div>
	</div>
</div>
<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
	import ItemInfo from './ItemInfo'
	import LazyLoad from  'vanilla-lazyload'
	export default {
		name : 'SliderDetail' ,
		components : {
			ItemInfo
		},
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
		},
		mounted : function(){
			var lazyLoadInstances = [];

			var initOneLazyLoad = function (horizContainerElement) {
  // When the .horizContainer element enters the viewport,
  // instantiate a new LazyLoad on the horizContainerElement
  var oneLL = new LazyLoad({
  	container: horizContainerElement
  });
  // Optionally push it in the lazyLoadInstances
  // array to keep track of the instances
  lazyLoadInstances.push(oneLL);
};

// The "lazyLazy" instance of lazyload is used to check
// when the .horizContainer divs enter the viewport
var lazyLazy = new LazyLoad({
	elements_selector: ".horizContainer",
	callback_enter: initOneLazyLoad,
  unobserve_entered: true // Stop observing .horizContainer(s) after they entered
});
}
}
</script>