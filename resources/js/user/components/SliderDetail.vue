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
						<img :src="'/image/item_images/'+item.image" :alt="item.name">
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
<component is="script" src="user/js/scripts.js" />
</template>
<script >
	import ItemInfo from './ItemInfo'

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
		}
	}
</script>