<template>
<div class="banner_section slide_medium shop_banner_slider staggered-animation-wrap" style="margin-top:-24px;">
  <div class="container">
      <div class="row">
          <div class="col-lg-9 offset-lg-3">
                <div id="carouselExampleControls" class="carousel slide light_arrow" data-ride="carousel">
                    <div class="carousel-inner">
                        <div v-for="(banner,key) in banners" :class="key==0 ? 'carousel-item active background_bg' : 'carousel-item background_bg'"
                        v-bind:style="{ 'background-image': 'url(/image/banner_images/' + banner.pic + ')' }" >
                            <div class="banner_slide_content banner_content_inner">
                                <div class="col-lg-8 col-10">
                                    <div class="banner_content overflow-hidden">
                                        <a class="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol class="carousel-indicators indicators_style1">
                        <li v-for="(banner,key) in banners" data-target="#carouselExampleControls" :data-slide-to="key" :class="key==0 ? 'active' : null"></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script >
	export default {
		data(){
			return {
				banners : {}
			}
		},
		methods: {
			async getBanners(){
				window.axios.get( 'banners' ).then( (response) => {
					this.banners=response.data.banners
				} )
			}
		},
		async created(){
			await this.getBanners()
		}
	}
</script>