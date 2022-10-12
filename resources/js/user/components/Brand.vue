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
					<div class="client_logo carousel_slider owl-carousel owl-theme nav_style3 horizContainer" data-dots="false" data-nav="true" data-margin="30" data-loop="true" data-autoplay="true" data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}' 
					ref="carouselSlider">
					<div class="item" v-for="brand in brands">
						<div class="cl_logo">
							<img 
							:data-src="
							[ brand.pic==null ? '/images/logo_dark.png' :  '/image/brand_images/' + brand.pic]"
							class="lazy" 
							:alt="brand.name" 
							>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>
<!-- 	<component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
	import { translate } from '../../helpers/general.js'
	import {horizontalImageCache} from '../../helpers/general.js';
	export default {
		data(){
			return {
				brands : {}
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
			}
		},
		created(){
			this.getBrands()
		},
		mounted : function(){
			horizontalImageCache()
}
}
</script>