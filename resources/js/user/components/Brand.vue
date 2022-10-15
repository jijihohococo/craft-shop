<template>
	<div class="section small_pt">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="heading_tab_header">
						<div class="heading_s2">
							<h2>{{ translateLang('Brands') }}</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="client_logo carousel_slider nav_style3">
						<Carousel
						v-if="brands!=={}"
						:items-to-show="3"
						:wrapAround="true"
						:breakpoints="breakpoints"
						snap-align="center">
						<Slide class="item" v-for="brand in brands" :key="brand.id">
							<div class="cl_logo">
								<v-lazy-image 
								:src="showImage(brand.pic)"
								:alt="brand.name" />
							</div>
						</Slide>
					</Carousel>
				</div>
			</div>
		</div>
	</div>
</div>

</template>
<script >
	import { translate } from '../../helpers/general.js'
	import { Carousel, Slide } from 'vue3-carousel'
	import VLazyImage from "v-lazy-image"
	export default {
		components : {
			Carousel,
			Slide,
			VLazyImage
		},
		data(){
			return {
				brands : {},
				breakpoints : {
					0: {
						itemsToShow: 2
					},
					480: {
						itemsToShow: 3
					},
					767: {
						itemsToShow:4
					},
					991: {
						itemsToShow:5
					}
				}
			}
		},
		methods :{
			translateLang(data){
				return  translate(data);
			},
			getBrands(){
				window.axios.get( 'brands' ).then(( response ) =>  {
					this.brands=response.data.brands
				} )
			},
			showImage(image){
				return image==null ? '/images/logo_dark.png' :  '/image/brand_images/' + image
			}
		},
		created(){
			this.getBrands()
		}
	}
</script>