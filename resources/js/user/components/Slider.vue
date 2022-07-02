<template>
	<div class="main-slider">

		<div class="swiper-viewport">
			<div id="slideshow0" class="swiper-container" style="opacity: 1;">
				<div class="swiper-wrapper"> 
					<div class="swiper-slide text-center"><a href="#"><img src="https://opencart.templatemela.com/OPC10/OPC100248/OPC1/image/cache/catalog/Main-Banner-03-920x480.jpg" alt="Main-banner3" class="img-responsive" /></a></div>
					<div class="swiper-slide text-center"><a href="#"><img src="https://opencart.templatemela.com/OPC10/OPC100248/OPC1/image/cache/catalog/Main-Banner-02-920x480.jpg" alt="Main-banner1" class="img-responsive" /></a></div>
					<div class="swiper-slide text-center"><a href="#"><img src="https://opencart.templatemela.com/OPC10/OPC100248/OPC1/image/cache/catalog/Main-Banner-1-920x480.jpg" alt="Main-banner2" class="img-responsive" /></a></div>
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
		mounted: function() {
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
		}
	}
</script>