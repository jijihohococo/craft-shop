<template>

    <!-- LOADER -->
<!-- <div class="preloader">
    <div class="lds-ellipsis">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div> -->
<!-- END LOADER -->

<!-- START SECTION BANNER -->
<Banner />
<!-- END SECTION BANNER -->

<!-- END MAIN CONTENT -->
<div class="main_content">

    <!-- START SECTION SHOP -->
    <div class="section small_pb">
      <div class="container">
        <ItemSlider
        main_title="Best Seller Products"
        :titles='[
        { name : "Laptop" , link :"laptop" },
        { name : "Desktop" , link : "desktop" },
        { name : "Accessory" , link : "accessory" },
        { name : "Desktop Component" , link : "component"  }
        ]'
        api="best_sellers"
        />
        <ItemSlider 
        main_title="Gaming Products"
        :titles='[
        { name : "Gaming Laptop" , link : "gaming_laptop" },
        { name : "Gaming Mouse" , link : "gaming_mouse" },
        { name : "Gaming Keyboard" , link : "gaming_keyboard" },
        { name : "Gaming Headphone" , link : "gaming_headphone" }
        ]'
        api="gamings"
        />
    </div>
</div>
<!-- END SECTION SHOP -->

<!-- START SECTION BANNER --> 
<Collections />
<!-- END SECTION BANNER --> 

<!-- START SECTION SHOP -->
<div class="section small_pt small_pb">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="heading_tab_header">
                <div class="heading_s2">
                    <h2>Deal Of The Days</h2>
                </div>
                <div class="deal_timer">
                  <div class="countdown_time countdown_style1" data-time="2018/09/28 13:22:15"></div>
              </div>
          </div>
      </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
          <div class="item">
            <div class="product">
                <div class="product_img">
                    <a href="shop-product-detail.html">
                        <img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img1.jpg" alt="product_img1">
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
                <div class="product_info">
                    <h6 class="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                    <div class="product_price">
                        <span class="price">$45.00</span>
                        <del>$55.25</del>
                        <div class="on_sale">
                            <span>35% Off</span>
                        </div>
                    </div>
                    <div class="rating_wrap">
                        <div class="rating">
                            <div class="product_rate" style="width:80%"></div>
                        </div>
                        <span class="rating_num">(21)</span>
                    </div>
                    <div class="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                    <div class="pr_switch_wrap">
                        <div class="product_color_switch">
                            <span class="active" data-color="#87554B"></span>
                            <span data-color="#333333"></span>
                            <span data-color="#DA323F"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="product">
                <div class="product_img">
                    <a href="shop-product-detail.html">
                        <img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img2.jpg" alt="product_img2">
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
                <div class="product_info">
                    <h6 class="product_title"><a href="shop-product-detail.html">Lether Gray Tuxedo</a></h6>
                    <div class="product_price">
                        <span class="price">$55.00</span>
                        <del>$95.00</del>
                        <div class="on_sale">
                            <span>25% Off</span>
                        </div>
                    </div>
                    <div class="rating_wrap">
                        <div class="rating">
                            <div class="product_rate" style="width:68%"></div>
                        </div>
                        <span class="rating_num">(15)</span>
                    </div>
                    <div class="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                    <div class="pr_switch_wrap">
                        <div class="product_color_switch">
                            <span class="active" data-color="#847764"></span>
                            <span data-color="#0393B5"></span>
                            <span data-color="#DA323F"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="product">
                <span class="pr_flash">New</span>
                <div class="product_img">
                    <a href="shop-product-detail.html">
                        <img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img3.jpg" alt="product_img3">
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
                <div class="product_info">
                    <h6 class="product_title"><a href="shop-product-detail.html">woman full sliv dress</a></h6>
                    <div class="product_price">
                        <span class="price">$68.00</span>
                        <del>$99.00</del>
                    </div>
                    <div class="rating_wrap">
                        <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                        </div>
                        <span class="rating_num">(25)</span>
                    </div>
                    <div class="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                    <div class="pr_switch_wrap">
                        <div class="product_color_switch">
                            <span class="active" data-color="#333333"></span>
                            <span data-color="#7C502F"></span>
                            <span data-color="#2F366C"></span>
                            <span data-color="#874A3D"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="product">
                <div class="product_img">
                    <a href="shop-product-detail.html">
                        <img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img4.jpg" alt="product_img4">
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
                <div class="product_info">
                    <h6 class="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                    <div class="product_price">
                        <span class="price">$69.00</span>
                        <del>$89.00</del>
                        <div class="on_sale">
                            <span>20% Off</span>
                        </div>
                    </div>
                    <div class="rating_wrap">
                        <div class="rating">
                            <div class="product_rate" style="width:70%"></div>
                        </div>
                        <span class="rating_num">(22)</span>
                    </div>
                    <div class="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                    <div class="pr_switch_wrap">
                        <div class="product_color_switch">
                            <span class="active" data-color="#333333"></span>
                            <span data-color="#A92534"></span>
                            <span data-color="#B9C2DF"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="product">
                <div class="product_img">
                    <a href="shop-product-detail.html">
                        <img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img5.jpg" alt="product_img5">
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
                <div class="product_info">
                    <h6 class="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                    <div class="product_price">
                        <span class="price">$45.00</span>
                        <del>$55.25</del>
                        <div class="on_sale">
                            <span>35% Off</span>
                        </div>
                    </div>
                    <div class="rating_wrap">
                        <div class="rating">
                            <div class="product_rate" style="width:80%"></div>
                        </div>
                        <span class="rating_num">(21)</span>
                    </div>
                    <div class="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                    <div class="pr_switch_wrap">
                        <div class="product_color_switch">
                            <span class="active" data-color="#87554B"></span>
                            <span data-color="#333333"></span>
                            <span data-color="#5FB7D4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
<!-- END SECTION SHOP -->

<FeatureProducts />

<!-- START SECTION CLIENT LOGO -->
<Brand />
<!-- END SECTION CLIENT LOGO -->

<Subscribe />

</div>
<!-- END MAIN CONTENT -->

<Footer />

</template>
<script >
	import Banner from '../components/Banner';
    import Brand from '../components/Brand';
    import Footer from '../components/Footer';
    import ItemSlider from '../components/ItemSlider';
    import FeatureProducts from '../components/FeatureProducts';
    import Subscribe from '../components/Subscribe';
    import Collections from '../components/Collections';
    export default {
      components : {
       Banner,
       Brand,
       Footer,
       ItemSlider,
       FeatureProducts,
       Subscribe,
       Collections
   },
   created(){
    window.scrollTo(0, 0);
   }
     // data(){
     //    return {
     //        categories : {}
     //    }
     // },
     // methods : {
     //    getCategories(){
     //            window.axios.get( 'categories' ).then( (response) => {
     //                this.categories=response.data.categories
     //            } )
     //    }
     // },
     // created(){
     //   this.getCategories() 
     // },
    //  mounted() {
    //     const plugin = document.createElement("script");
    //     plugin.setAttribute(
    //       "src",
    //       "/user/js/scripts.js"
    //       );
    //     plugin.async = true;
    //     document.head.appendChild(plugin);
    // }
}
</script>