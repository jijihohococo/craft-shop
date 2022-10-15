<template>
	<div
	:class="tab_class"
	:id="content"
	role="tabpanel"
	:aria-labelledby="content+'-tab'">
	<div
	class="product_slider carousel_slider nav_style1">
	<Carousel
	v-if="items.length>0"
	:items-to-show="3"
	:wrapAround="true"
	:breakpoints="breakpoints"
	snap-align="center">
	<Slide v-for="(item,key) in items" :key="item.id">
		<div class="product">
			<div class="product_img">
				<a href="shop-product-detail.html">
					<v-lazy-image 
					:src="showImage(item.image)"
					:alt="item.name" />
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
	</Slide>


</Carousel>
</div>
</div>
<component is="style" >
	.carousel__item {
		min-height: 200px;
		width: 100%;
		background-color: var(--vc-clr-primary);
		color: var(--vc-clr-white);
		font-size: 20px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.carousel__slide {
		padding: 10px;
	}
</component>
</template>
<script >
	import ItemInfo from './ItemInfo'
	import { Carousel, Slide } from 'vue3-carousel'

	import 'vue3-carousel/dist/carousel.css'
	import VLazyImage from "v-lazy-image"
	export default {
		name : 'SliderDetail' ,
		components : {
			ItemInfo,
			Carousel,
			Slide,
			VLazyImage
		},
		data(){
			return {
				run : false ,
				breakpoints: {
					0: {
						itemsToShow: 1
					},
					481: {
						itemsToShow: 2
					},
					768: {
						itemsToShow:3
					},
					1199: {
						itemsToShow:4
					}
				},
			}
		},
		props : {
			content : {
				type : String
			},
			tab_class : {
				type : String
			},
			items : {
				type : Array,
				default : []
			}
		},
		methods : {
			showImage(image){
				return image==null ? '/images/logo_dark.png' :
				'/image/item_images/' + image
			}
		}
	}
</script>