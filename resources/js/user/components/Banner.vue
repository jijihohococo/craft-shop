<template>
	<div class="main-slider">

      <div class="swiper-viewport">
        <div id="slideshow0" class="swiper-container" style="opacity: 1;">
          <div class="swiper-wrapper" v-for="banner in banners"> 
           <div class="swiper-slide text-center">
           	<a href="#">
           		<img :src="'image/banner_images/'+banner.pic" :alt="banner.title" class="img-responsive" />
           	</a>
           </div>
         </div>
       </div>
       <div class="swiper-pagination slideshow0"></div>
       <div class="swiper-pager">
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
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
			getBanners(){
				window.axios.get( 'get_banners' ).then( (response) => {
					this.banners=response.data.banners
				} )
			}
		},
		mounted (){
			$('#slideshow0').swiper({
     mode: 'horizontal',
     slidesPerView: 1,
     pagination: '.slideshow0',
     paginationClickable: true,
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
     spaceBetween: 0,
     autoplay: 2500,
     autoplayDisableOnInteraction: true,
     loop: true,
     effect:'fade'
   });
		},
		created(){
			this.getBanners()
		}
	}
</script>