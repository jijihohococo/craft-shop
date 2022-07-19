<template>
	<!-- START SECTION BANNER -->
<div class="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
  <div class="container">
      <div class="row">
          <div class="col-lg-9 offset-lg-3">
                <div id="carouselExampleControls" class="carousel slide light_arrow" data-ride="carousel">
                    <div class="carousel-inner">
                    	<template v-for="(banner,key) in banners" >
                        <div :class="key==0 ? 'carousel-item active background_bg' : 'carousel-item background_bg'" :data-img-src="'/image/banner_images/'+banner.pic">
                            <div class="banner_slide_content banner_content_inner">
                                <div class="col-lg-8 col-10">
                                    <div class="banner_content overflow-hidden">
                                        <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Get up to 50% off Today Only!</h5>
                                        <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">{{ banner.title }}</h2>
                                        <a class="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </template>
                    </div>
                    <ol class="carousel-indicators indicators_style1">
                    	<template v-for="(banner,key) in banners">
                        <li data-target="#carouselExampleControls" :data-slide-to="key" :class="key==0 ? 'active' : null"></li>
                      </template>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END SECTION BANNER -->
</template>
<script >
	export default {
		data(){
			return {
				banners : {}
			}
		},
		methods: {
			getBanners(){
				window.axios.get( 'get_banners' ).then( (response) => {
					this.banners=response.data.banners
				} )
			}
		},
		created(){
			this.getBanners()
		},
		mounted : function (){
			$('#myCarousel').carousel({
				interval: 3000,
				cycle: true
			});
		}
	}
</script>