<template>
	<!-- START FOOTER -->
<footer class="bg_gray">
  <div class="footer_top small_pt pb_20">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="widget">
                <div class="footer_logo">
                    <ShopImage :pic="shop.data.pic" />
                </div>
                <p class="mb-3">If you are going to use of Lorem Ipsum need to be sure there isn't anything hidden of text</p>
                <ul class="contact_info">
                    <li>
                        <i class="ti-location-pin"></i>
                        <p>{{ shop.data.address }}</p>
                    </li>
                    <li>
                        <i class="ti-email"></i>
                        <a :href="shop.data.email">{{ shop.data.email }}</a>
                    </li>
                    <li>
                        <i class="ti-mobile"></i>
                        <p>{{ shop.data.phone }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="widget">
            <h6 class="widget_title">Useful Links</h6>
            <ul class="widget_links">
                <li><router-link to="/about_us">About Us</router-link></li>
                <li><router-link to="/faq" >FAQ</router-link></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
    <div class="col-lg-2 col-md-4 col-sm-6">
      <div class="widget">
        <h6 class="widget_title">My Account</h6>
        <ul class="widget_links">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Discount</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Orders History</a></li>
            <li><a href="#">Order Tracking</a></li>
        </ul>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-12">
  <div class="widget">
    <h6 class="widget_title">Instagram</h6>
    <ul class="widget_instafeed instafeed_col4">
        <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/insta_img1.jpg" alt="insta_img"><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
        <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/insta_img2.jpg" alt="insta_img"><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
        <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/insta_img3.jpg" alt="insta_img"><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
        <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/insta_img4.jpg" alt="insta_img"><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
        <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/insta_img5.jpg" alt="insta_img"><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
        <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/insta_img6.jpg" alt="insta_img"><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
        <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/insta_img7.jpg" alt="insta_img"><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
        <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/insta_img8.jpg" alt="insta_img"><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
    </ul>
</div>
</div>
</div>
</div>
</div>
<div class="middle_footer">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="shopping_info">
                <div class="row justify-content-center">
                    <div class="col-md-4">  
                        <div class="icon_box icon_box_style2">
                            <div class="icon">
                                <i class="flaticon-shipped"></i>
                            </div>
                            <div class="icon_box_content">
                              <h5>Free Delivery</h5>
                              <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">  
                    <div class="icon_box icon_box_style2">
                        <div class="icon">
                            <i class="flaticon-money-back"></i>
                        </div>
                        <div class="icon_box_content">
                          <h5>30 Day Returns Guarantee</h5>
                          <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">  
                <div class="icon_box icon_box_style2">
                    <div class="icon">
                        <i class="flaticon-support"></i>
                    </div>
                    <div class="icon_box_content">
                      <h5>27/4 Online Support</h5>
                      <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
</div>
</div>
<div class="bottom_footer border-top-tran">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4">
                <p class="mb-lg-0 text-center">© {{ currentYear }} All Rights Reserved by {{ shop.data.name }}</p>
            </div>
            <div class="col-lg-4 order-lg-first">
              <div class="widget mb-lg-0">
                <ul class="social_icons text-center text-lg-left">
                    <li><a href="#" class="sc_facebook"><i class="ion-social-facebook"></i></a></li>
                    <li><a href="#" class="sc_twitter"><i class="ion-social-twitter"></i></a></li>
                    <li><a href="#" class="sc_google"><i class="ion-social-googleplus"></i></a></li>
                    <li><a href="#" class="sc_youtube"><i class="ion-social-youtube-outline"></i></a></li>
                    <li><a href="#" class="sc_instagram"><i class="ion-social-instagram-outline"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-lg-4">
            <ul class="footer_payment text-center text-lg-right">
                <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/visa.png" alt="visa"></a></li>
                <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/discover.png" alt="discover"></a></li>
                <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/master_card.png" alt="master_card"></a></li>
                <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/paypal.png" alt="paypal"></a></li>
                <li><a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/amarican_express.png" alt="amarican_express"></a></li>
            </ul>
        </div>
    </div>
</div>
</div>
</footer>
<!-- END FOOTER -->
<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
    import ShopImage from './ShopImage'
	import { shop , currentYear } from '../../store';
	export default {
        components  : {
            ShopImage
        },
		data(){
            return {
                shop,
                currentYear
            }
        },
	}
</script>