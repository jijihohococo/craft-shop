<template>
<!-- <div class="preloader">
    <div class="lds-ellipsis">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>  -->

<!-- START SECTION BANNER -->
<Banner />
<!-- END SECTION BANNER -->

<!-- END MAIN CONTENT -->
<div class="main_content">

    <!-- START SECTION SHOP -->
    <div class="section small_pb">
      <div class="container">
        <NewItemSlider
        :main_title="translateLang('Best')"
        :titles='[
        { name : "Laptop" , link :"laptop" },
        { name : "Desktop" , link : "desktop" },
        { name : "Accessory" , link : "accessory" },
        { name : "Desktop Component" , link : "component"  }
        ]'
        api="best_sellers"
        />
        <NewItemSlider 
        :main_title="translateLang('Gaming')"
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

<FeatureProducts />

<!-- START SECTION CLIENT LOGO -->
<Brand />
<!-- END SECTION CLIENT LOGO -->

<Subscribe />

</div>
<!-- END MAIN CONTENT -->

    <!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
	import Banner from '../components/Banner';
    import Brand from '../components/Brand';
    import NewItemSlider from '../components/NewItemSlider';
    import FeatureProducts from '../components/FeatureProducts';
    import Subscribe from '../components/Subscribe';
    import Collections from '../components/Collections';
    import { common_mixin } from '../../common/'
    import { mix } from '../common/ui'
    export default {
      components : {
         Banner,
         Brand,
         NewItemSlider,
         FeatureProducts,
         Subscribe,
         Collections
     },
     mixins: [common_mixin,mix],
}
</script>