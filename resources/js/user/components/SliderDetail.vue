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
		<SliderItem :item="item" />
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
	
	import SliderItem from './SliderItem'
	import { Carousel, Slide } from 'vue3-carousel'

	import 'vue3-carousel/dist/carousel.css'
	export default {
		name : 'SliderDetail' ,
		components : {
			SliderItem,
			Carousel,
			Slide
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
		}
	}
</script>