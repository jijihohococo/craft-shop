<template>
	<div class="product-image">
		<div class="product_img_box">
			<img id="product_img" src='/images/product_img1.jpg' data-zoom-image="/images/product_zoom_img1.jpg" alt="product_img1" />
			<a href="#" class="product_img_zoom" title="Zoom">
				<span class="linearicons-zoom-in"></span>
			</a>
		</div>
		<div id="pr_item_gallery" class="product_gallery_item slick_slider" data-slides-to-show="4" data-slides-to-scroll="1" data-infinite="false">
			<div class="item">
				<a href="#" class="product_gallery_item active" data-image="/images/product_img1.jpg" data-zoom-image="/images/product_zoom_img1.jpg">
					<img src="/images/product_small_img1.jpg" alt="product_small_img1" />
				</a>
			</div>
			<div class="item">
				<a href="#" class="product_gallery_item" data-image="/images/product_img1-2.jpg" data-zoom-image="/images/product_zoom_img2.jpg">
					<img src="/images/product_small_img2.jpg" alt="product_small_img2" />
				</a>
			</div>
			<div class="item">
				<a href="#" class="product_gallery_item" data-image="/images/product_img1-3.jpg" data-zoom-image="/images/product_zoom_img3.jpg">
					<img src="/images/product_small_img3.jpg" alt="product_small_img3" />
				</a>
			</div>
			<div class="item">
				<a href="#" class="product_gallery_item" data-image="/images/product_img1-4.jpg" data-zoom-image="/images/product_zoom_img4.jpg">
					<img src="/images/product_small_img4.jpg" alt="product_small_img4" />
				</a>
			</div>
			<div class="item">
				<a href="#" class="product_gallery_item" data-image="/images/product_img1-2.jpg" data-zoom-image="/images/product_zoom_img2.jpg">
					<img src="/images/product_small_img2.jpg" alt="product_small_img2" />
				</a>
			</div>
			<div class="item">
				<a href="#" class="product_gallery_item" data-image="/images/product_img1-3.jpg" data-zoom-image="/images/product_zoom_img3.jpg">
					<img src="/images/product_small_img3.jpg" alt="product_small_img3" />
				</a>
			</div>
		</div>
	</div>
</template>
<script >
	export default {
		unmounted : () => {
			var image = $('#product_img');
			$.removeData(image, 'elevateZoom');//remove zoom instance from image
			$('.zoomContainer:last-child').remove();
			$.magnificPopup.defaults.callbacks = {
				close: function() {
      // Wait until overflow:hidden has been removed from the html tag
					setTimeout(function() {
						$('body').removeClass('zoom_image');
						$('body').removeClass('zoom_gallery_image');
        //$('.zoomContainer:last-child').remove();// remove zoom container from DOM
						$('.zoomContainer').slice(1).remove();
					}, 100);
				}
			};
		},
		mounted : () => {


			// function slick_slider() {
			// 	$('.slick_slider').map( function(key,s) {
			// 		var $slick_carousel = $(s);
			// 		$slick_carousel.slick({
			// 			arrows: $slick_carousel.data("arrows"),
			// 			dots: $slick_carousel.data("dots"),
			// 			infinite: $slick_carousel.data("infinite"),
			// 			centerMode: $slick_carousel.data("center-mode"),
			// 			vertical: $slick_carousel.data("vertical"),
			// 			fade: $slick_carousel.data("fade"),
			// 			cssEase: $slick_carousel.data("css-ease"),
			// 			autoplay: $slick_carousel.data("autoplay"),
			// 			verticalSwiping: $slick_carousel.data("vertical-swiping"),
			// 			autoplaySpeed: $slick_carousel.data("autoplay-speed"),
			// 			speed: $slick_carousel.data("speed"),
			// 			pauseOnHover: $slick_carousel.data("pause-on-hover"),
			// 			draggable: $slick_carousel.data("draggable"),
			// 			slidesToShow: $slick_carousel.data("slides-to-show"),
			// 			slidesToScroll: $slick_carousel.data("slides-to-scroll"),
			// 			asNavFor: $slick_carousel.data("as-nav-for"),
			// 			focusOnSelect: $slick_carousel.data("focus-on-select"),
			// 			responsive: $slick_carousel.data("responsive")
			// 		}); 
			// 	});
			// }

			// slick_slider()

        /*===================================*
    21. QUICKVIEW POPUP + ZOOM IMAGE + PRODUCT SLIDER JS
    *===================================*/
			var image = $('#product_img');
    //var zoomConfig = {};
        //var zoomActive = false;

			if ($(image).length > 0){
				$(image).elevateZoom({
					cursor: "crosshair",
					easing : true, 
					gallery:'pr_item_gallery',
					zoomType: "inner",
					galleryActiveClass: "active"
				}); 
			}

			

			$.magnificPopup.defaults.callbacks = {
				open: function() {
					$('body').addClass('zoom_image');
				},
			};

    // Set up gallery on click
			var galleryZoom = $('#pr_item_gallery');
			galleryZoom.magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery:{
					enabled: true
				},
				callbacks: {
					elementParse: function(item) {
						item.src = item.el.attr('data-zoom-image');
					}
				}
			});

    // Zoom image when click on icon
			$('.product_img_zoom').on('click', function(){
				var atual = $('#pr_item_gallery a').attr('data-zoom-image');
				$('body').addClass('zoom_gallery_image');
				$('#pr_item_gallery .item').each(function(){
					if( atual == $(this).find('.product_gallery_item').attr('data-zoom-image') ) {
						return galleryZoom.magnificPopup('open', $(this).index());
					}
				});
			});
		}
	}
</script>