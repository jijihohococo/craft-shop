/*! For license information please see 195.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[195],{8924:(a,t,i)=>{"use strict";i.d(t,{c:()=>s});var e=i(3406),s={data:function(){return{userLang:e.lE}},methods:{translateLang:function(a){return i(2656)("./"+this.userLang.data+"/data.json")[a]},thousandSeprator:function(a){return a.replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}},3406:(a,t,i)=>{"use strict";i.d(t,{Ri:()=>o,SA:()=>l,VK:()=>n,lE:()=>r,n$:()=>s});var e=i(821);i(7333);var s=(0,e.qj)({data:!!window.cookies.get("access_token")}),r=(0,e.qj)({data:window.cookies.get("lang")?window.cookies.get("lang"):"en",changeData:function(a){this.data=a,window.cookies.set("lang",a,"1D",null,null,null,"Lax")}}),o=(0,e.qj)({data:window.shop,changeData:function(a){this.data=a}}),l=(0,e.qj)({data:{},changeData:function(a){this.data=a}}),n=((0,e.qj)({data:{},changeData:function(a){this.data=a}}),(new Date).getFullYear())},7940:(a,t,i)=>{"use strict";function e(a){var t=0,i=0,e=0,s=0,r=0;a.map((function(a){switch(a){case"1":t++;break;case"2":i++;break;case"3":e++;break;case"4":s++;break;case"5":r++}}));var o=t/a.length*100,l=i/a.length*100,n=e/a.length*100,c=s/a.length*100,d=r/a.length*100;return(o>0||l>0||n>0||c>0||d>0?(5*r+4*s+3*e+2*i+1*t)/(r+s+e+i+t):0)/5*100}function s(a){return parseInt(a).toString()}function r(a,t){return 100*(a-t)/a}i.d(t,{S2:()=>s,S5:()=>r,p:()=>e})},8607:(a,t,i)=>{"use strict";i.d(t,{Z:()=>u});var e=i(821),s={key:0,class:"product_price"},r={class:"price"},o={class:"on_sale"},l={key:1,class:"product_price"},n={class:"price"};var c=i(7940);const d={props:["normal_price","sale_price"],mixins:[i(8924).c],methods:{showItemPrice:function(a){return(0,c.S2)(a)},showItemPromotionPercentage:function(a,t){return(0,c.S5)(a,t)}}};const u=(0,i(3744).Z)(d,[["render",function(a,t,i,c,d,u){return i.normal_price!==i.sale_price?((0,e.wg)(),(0,e.iD)("div",s,[(0,e._)("span",r,(0,e.zw)(a.thousandSeprator(u.showItemPrice(i.sale_price)))+" MMK ",1),(0,e._)("del",null,(0,e.zw)(a.thousandSeprator(u.showItemPrice(i.normal_price)))+" MMK",1),(0,e._)("div",o,[(0,e._)("span",null,(0,e.zw)(u.showItemPrice(u.showItemPromotionPercentage(i.normal_price,i.sale_price)))+"% Off",1)])])):((0,e.wg)(),(0,e.iD)("div",l,[(0,e._)("span",n,(0,e.zw)(a.thousandSeprator(u.showItemPrice(i.sale_price)))+" MMK ",1)]))}]])},195:(a,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>P});var e=i(821),s={class:"section"},r={class:"container"},o={class:"row"},l=(0,e.uE)('<div class="col-lg-6 col-md-6 mb-4 mb-md-0"><div class="product-image"><div class="product_img_box"><img id="product_img" src="assets/images/product_img1.jpg" data-zoom-image="assets/images/product_zoom_img1.jpg" alt="product_img1"><a href="#" class="product_img_zoom" title="Zoom"><span class="linearicons-zoom-in"></span></a></div><div id="pr_item_gallery" class="product_gallery_item slick_slider" data-slides-to-show="4" data-slides-to-scroll="1" data-infinite="false"><div class="item"><a href="#" class="product_gallery_item active" data-image="assets/images/product_img1.jpg" data-zoom-image="assets/images/product_zoom_img1.jpg"><img src="assets/images/product_small_img1.jpg" alt="product_small_img1"></a></div><div class="item"><a href="#" class="product_gallery_item" data-image="assets/images/product_img1-2.jpg" data-zoom-image="assets/images/product_zoom_img2.jpg"><img src="assets/images/product_small_img2.jpg" alt="product_small_img2"></a></div><div class="item"><a href="#" class="product_gallery_item" data-image="assets/images/product_img1-3.jpg" data-zoom-image="assets/images/product_zoom_img3.jpg"><img src="assets/images/product_small_img3.jpg" alt="product_small_img3"></a></div><div class="item"><a href="#" class="product_gallery_item" data-image="assets/images/product_img1-4.jpg" data-zoom-image="assets/images/product_zoom_img4.jpg"><img src="assets/images/product_small_img4.jpg" alt="product_small_img4"></a></div><div class="item"><a href="#" class="product_gallery_item" data-image="assets/images/product_img1-2.jpg" data-zoom-image="assets/images/product_zoom_img2.jpg"><img src="assets/images/product_small_img2.jpg" alt="product_small_img2"></a></div><div class="item"><a href="#" class="product_gallery_item" data-image="assets/images/product_img1-3.jpg" data-zoom-image="assets/images/product_zoom_img3.jpg"><img src="assets/images/product_small_img3.jpg" alt="product_small_img3"></a></div></div></div></div>',1),n={class:"col-lg-6 col-md-6"},c={class:"pr_detail"},d={class:"product_description"},u={class:"product_title"},p={href:"#"},m=(0,e.uE)('<div class="product_price"><span class="price">$45.00</span><del>$55.25</del><div class="on_sale"><span>35% Off</span></div></div><div class="rating_wrap"><div class="rating"><div class="product_rate" style="width:80%;"></div></div><span class="rating_num">(21)</span></div><div class="pr_desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class="product_sort_info"><ul><li><i class="linearicons-shield-check"></i> 1 Year AL Jazeera Brand Warranty</li><li><i class="linearicons-sync"></i> 30 Day Return Policy</li><li><i class="linearicons-bag-dollar"></i> Cash on Delivery available</li></ul></div><div class="pr_switch_wrap"><span class="switch_lable">Color</span><div class="product_color_switch"><span class="active" data-color="#87554B"></span><span data-color="#333333"></span><span data-color="#DA323F"></span></div></div><div class="pr_switch_wrap"><span class="switch_lable">Size</span><div class="product_size_switch"><span>xs</span><span>s</span><span>m</span><span>l</span><span>xl</span></div></div>',6),v=(0,e.uE)('<hr><div class="cart_extra"><div class="cart-product-quantity"><div class="quantity"><input type="button" value="-" class="minus"><input type="text" name="quantity" value="1" title="Qty" class="qty" size="4"><input type="button" value="+" class="plus"></div></div><div class="cart_btn"><button class="btn btn-fill-out btn-addtocart" type="button"><i class="icon-basket-loaded"></i> Add to cart</button><a class="add_compare" href="#"><i class="icon-shuffle"></i></a><a class="add_wishlist" href="#"><i class="icon-heart"></i></a></div></div><hr><ul class="product-meta"><li>SKU: <a href="#">BE45VGRT</a></li><li>Category: <a href="#">Clothing</a></li><li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a></li></ul><div class="product_share"><span>Share:</span><ul class="social_icons"><li><a href="#"><i class="ion-social-facebook"></i></a></li><li><a href="#"><i class="ion-social-twitter"></i></a></li><li><a href="#"><i class="ion-social-googleplus"></i></a></li><li><a href="#"><i class="ion-social-youtube-outline"></i></a></li><li><a href="#"><i class="ion-social-instagram-outline"></i></a></li></ul></div>',5),h=(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-12"},[(0,e._)("div",{class:"large_divider clearfix"})])],-1),_=(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-12"},[(0,e._)("div",{class:"tab-style3"},[(0,e._)("ul",{class:"nav nav-tabs",role:"tablist"},[(0,e._)("li",{class:"nav-item"},[(0,e._)("a",{class:"nav-link active",id:"Description-tab","data-toggle":"tab",href:"#Description",role:"tab","aria-controls":"Description","aria-selected":"true"},"Description")]),(0,e._)("li",{class:"nav-item"},[(0,e._)("a",{class:"nav-link",id:"Additional-info-tab","data-toggle":"tab",href:"#Additional-info",role:"tab","aria-controls":"Additional-info","aria-selected":"false"},"Additional info")]),(0,e._)("li",{class:"nav-item"},[(0,e._)("a",{class:"nav-link",id:"Reviews-tab","data-toggle":"tab",href:"#Reviews",role:"tab","aria-controls":"Reviews","aria-selected":"false"},"Reviews (2)")])]),(0,e._)("div",{class:"tab-content shop_info_tab"},[(0,e._)("div",{class:"tab-pane fade show active",id:"Description",role:"tabpanel","aria-labelledby":"Description-tab"},[(0,e._)("p",null,"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Vivamus bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."),(0,e._)("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.")]),(0,e._)("div",{class:"tab-pane fade",id:"Additional-info",role:"tabpanel","aria-labelledby":"Additional-info-tab"},[(0,e._)("table",{class:"table table-bordered"},[(0,e._)("tr",null,[(0,e._)("td",null,"Capacity"),(0,e._)("td",null,"5 Kg")]),(0,e._)("tr",null,[(0,e._)("td",null,"Color"),(0,e._)("td",null,"Black, Brown, Red,")]),(0,e._)("tr",null,[(0,e._)("td",null,"Water Resistant"),(0,e._)("td",null,"Yes")]),(0,e._)("tr",null,[(0,e._)("td",null,"Material"),(0,e._)("td",null,"Artificial Leather")])])]),(0,e._)("div",{class:"tab-pane fade",id:"Reviews",role:"tabpanel","aria-labelledby":"Reviews-tab"},[(0,e._)("div",{class:"comments"},[(0,e._)("h5",{class:"product_tab_title"},[(0,e.Uk)("2 Review For "),(0,e._)("span",null,"Blue Dress For Woman")]),(0,e._)("ul",{class:"list_none comment_list mt-4"},[(0,e._)("li",null,[(0,e._)("div",{class:"comment_img"},[(0,e._)("img",{src:"assets/images/user1.jpg",alt:"user1"})]),(0,e._)("div",{class:"comment_block"},[(0,e._)("div",{class:"rating_wrap"},[(0,e._)("div",{class:"rating"},[(0,e._)("div",{class:"product_rate",style:{width:"80%"}})])]),(0,e._)("p",{class:"customer_meta"},[(0,e._)("span",{class:"review_author"},"Alea Brooks"),(0,e._)("span",{class:"comment-date"},"March 5, 2018")]),(0,e._)("div",{class:"description"},[(0,e._)("p",null,"Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate")])])]),(0,e._)("li",null,[(0,e._)("div",{class:"comment_img"},[(0,e._)("img",{src:"assets/images/user2.jpg",alt:"user2"})]),(0,e._)("div",{class:"comment_block"},[(0,e._)("div",{class:"rating_wrap"},[(0,e._)("div",{class:"rating"},[(0,e._)("div",{class:"product_rate",style:{width:"60%"}})])]),(0,e._)("p",{class:"customer_meta"},[(0,e._)("span",{class:"review_author"},"Grace Wong"),(0,e._)("span",{class:"comment-date"},"June 17, 2018")]),(0,e._)("div",{class:"description"},[(0,e._)("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters")])])])])]),(0,e._)("div",{class:"review_form field_form"},[(0,e._)("h5",null,"Add a review"),(0,e._)("form",{class:"row mt-3"},[(0,e._)("div",{class:"form-group col-12"},[(0,e._)("div",{class:"star_rating"},[(0,e._)("span",{"data-value":"1"},[(0,e._)("i",{class:"far fa-star"})]),(0,e._)("span",{"data-value":"2"},[(0,e._)("i",{class:"far fa-star"})]),(0,e._)("span",{"data-value":"3"},[(0,e._)("i",{class:"far fa-star"})]),(0,e._)("span",{"data-value":"4"},[(0,e._)("i",{class:"far fa-star"})]),(0,e._)("span",{"data-value":"5"},[(0,e._)("i",{class:"far fa-star"})])])]),(0,e._)("div",{class:"form-group col-12"},[(0,e._)("textarea",{required:"required",placeholder:"Your review *",class:"form-control",name:"message",rows:"4"})]),(0,e._)("div",{class:"form-group col-md-6"},[(0,e._)("input",{required:"required",placeholder:"Enter Name *",class:"form-control",name:"name",type:"text"})]),(0,e._)("div",{class:"form-group col-md-6"},[(0,e._)("input",{required:"required",placeholder:"Enter Email *",class:"form-control",name:"email",type:"email"})]),(0,e._)("div",{class:"form-group col-12"},[(0,e._)("button",{type:"submit",class:"btn btn-fill-out",name:"submit",value:"Submit"},"Submit Review")])])])])])])])],-1),f=(0,e.uE)('<div class="row"><div class="col-12"><div class="small_divider"></div><div class="divider"></div><div class="medium_divider"></div></div></div><div class="row"><div class="col-12"><div class="heading_s1"><h3>Releted Products</h3></div><div class="releted_product_slider carousel_slider owl-carousel owl-theme" data-margin="20" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;481&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;768&quot;:{&quot;items&quot;: &quot;3&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;4&quot;}}"><div class="item"><div class="product"><div class="product_img"><a href="shop-product-detail.html"><img src="assets/images/product_img1.jpg" alt="product_img1"></a><div class="product_action_box"><ul class="list_none pr_action_btn"><li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li><li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li><li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li><li><a href="#"><i class="icon-heart"></i></a></li></ul></div></div><div class="product_info"><h6 class="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6><div class="product_price"><span class="price">$45.00</span><del>$55.25</del><div class="on_sale"><span>35% Off</span></div></div><div class="rating_wrap"><div class="rating"><div class="product_rate" style="width:80%;"></div></div><span class="rating_num">(21)</span></div><div class="pr_desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class="pr_switch_wrap"><div class="product_color_switch"><span class="active" data-color="#87554B"></span><span data-color="#333333"></span><span data-color="#DA323F"></span></div></div></div></div></div><div class="item"><div class="product"><div class="product_img"><a href="shop-product-detail.html"><img src="assets/images/product_img2.jpg" alt="product_img2"></a><div class="product_action_box"><ul class="list_none pr_action_btn"><li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li><li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li><li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li><li><a href="#"><i class="icon-heart"></i></a></li></ul></div></div><div class="product_info"><h6 class="product_title"><a href="shop-product-detail.html">Lether Gray Tuxedo</a></h6><div class="product_price"><span class="price">$55.00</span><del>$95.00</del><div class="on_sale"><span>25% Off</span></div></div><div class="rating_wrap"><div class="rating"><div class="product_rate" style="width:68%;"></div></div><span class="rating_num">(15)</span></div><div class="pr_desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class="pr_switch_wrap"><div class="product_color_switch"><span class="active" data-color="#847764"></span><span data-color="#0393B5"></span><span data-color="#DA323F"></span></div></div></div></div></div><div class="item"><div class="product"><span class="pr_flash">New</span><div class="product_img"><a href="shop-product-detail.html"><img src="assets/images/product_img3.jpg" alt="product_img3"></a><div class="product_action_box"><ul class="list_none pr_action_btn"><li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li><li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li><li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li><li><a href="#"><i class="icon-heart"></i></a></li></ul></div></div><div class="product_info"><h6 class="product_title"><a href="shop-product-detail.html">woman full sliv dress</a></h6><div class="product_price"><span class="price">$68.00</span><del>$99.00</del></div><div class="rating_wrap"><div class="rating"><div class="product_rate" style="width:87%;"></div></div><span class="rating_num">(25)</span></div><div class="pr_desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class="pr_switch_wrap"><div class="product_color_switch"><span class="active" data-color="#333333"></span><span data-color="#7C502F"></span><span data-color="#2F366C"></span><span data-color="#874A3D"></span></div></div></div></div></div><div class="item"><div class="product"><div class="product_img"><a href="shop-product-detail.html"><img src="assets/images/product_img4.jpg" alt="product_img4"></a><div class="product_action_box"><ul class="list_none pr_action_btn"><li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li><li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li><li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li><li><a href="#"><i class="icon-heart"></i></a></li></ul></div></div><div class="product_info"><h6 class="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6><div class="product_price"><span class="price">$69.00</span><del>$89.00</del><div class="on_sale"><span>20% Off</span></div></div><div class="rating_wrap"><div class="rating"><div class="product_rate" style="width:70%;"></div></div><span class="rating_num">(22)</span></div><div class="pr_desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class="pr_switch_wrap"><div class="product_color_switch"><span class="active" data-color="#333333"></span><span data-color="#A92534"></span><span data-color="#B9C2DF"></span></div></div></div></div></div><div class="item"><div class="product"><div class="product_img"><a href="shop-product-detail.html"><img src="assets/images/product_img5.jpg" alt="product_img5"></a><div class="product_action_box"><ul class="list_none pr_action_btn"><li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li><li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li><li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li><li><a href="#"><i class="icon-heart"></i></a></li></ul></div></div><div class="product_info"><h6 class="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6><div class="product_price"><span class="price">$45.00</span><del>$55.25</del><div class="on_sale"><span>35% Off</span></div></div><div class="rating_wrap"><div class="rating"><div class="product_rate" style="width:80%;"></div></div><span class="rating_num">(21)</span></div><div class="pr_desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class="pr_switch_wrap"><div class="product_color_switch"><span class="active" data-color="#87554B"></span><span data-color="#333333"></span><span data-color="#5FB7D4"></span></div></div></div></div></div></div></div></div>',2);function g(a){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g(a)}function w(){w=function(){return a};var a={},t=Object.prototype,i=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},s=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function l(a,t,i){return Object.defineProperty(a,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),a[t]}try{l({},"")}catch(a){l=function(a,t,i){return a[t]=i}}function n(a,t,i,e){var s=t&&t.prototype instanceof u?t:u,r=Object.create(s.prototype),o=new q(e||[]);return r._invoke=function(a,t,i){var e="suspendedStart";return function(s,r){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===s)throw r;return C()}for(i.method=s,i.arg=r;;){var o=i.delegate;if(o){var l=x(o,i);if(l){if(l===d)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===e)throw e="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);e="executing";var n=c(a,t,i);if("normal"===n.type){if(e=i.done?"completed":"suspendedYield",n.arg===d)continue;return{value:n.arg,done:i.done}}"throw"===n.type&&(e="completed",i.method="throw",i.arg=n.arg)}}}(a,i,o),r}function c(a,t,i){try{return{type:"normal",arg:a.call(t,i)}}catch(a){return{type:"throw",arg:a}}}a.wrap=n;var d={};function u(){}function p(){}function m(){}var v={};l(v,s,(function(){return this}));var h=Object.getPrototypeOf,_=h&&h(h(L([])));_&&_!==t&&i.call(_,s)&&(v=_);var f=m.prototype=u.prototype=Object.create(v);function y(a){["next","throw","return"].forEach((function(t){l(a,t,(function(a){return this._invoke(t,a)}))}))}function b(a,t){function e(s,r,o,l){var n=c(a[s],a,r);if("throw"!==n.type){var d=n.arg,u=d.value;return u&&"object"==g(u)&&i.call(u,"__await")?t.resolve(u.__await).then((function(a){e("next",a,o,l)}),(function(a){e("throw",a,o,l)})):t.resolve(u).then((function(a){d.value=a,o(d)}),(function(a){return e("throw",a,o,l)}))}l(n.arg)}var s;this._invoke=function(a,i){function r(){return new t((function(t,s){e(a,i,t,s)}))}return s=s?s.then(r,r):r()}}function x(a,t){var i=a.iterator[t.method];if(void 0===i){if(t.delegate=null,"throw"===t.method){if(a.iterator.return&&(t.method="return",t.arg=void 0,x(a,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var e=c(i,a.iterator,t.arg);if("throw"===e.type)return t.method="throw",t.arg=e.arg,t.delegate=null,d;var s=e.arg;return s?s.done?(t[a.resultName]=s.value,t.next=a.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function P(a){var t={tryLoc:a[0]};1 in a&&(t.catchLoc=a[1]),2 in a&&(t.finallyLoc=a[2],t.afterLoc=a[3]),this.tryEntries.push(t)}function j(a){var t=a.completion||{};t.type="normal",delete t.arg,a.completion=t}function q(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(P,this),this.reset(!0)}function L(a){if(a){var t=a[s];if(t)return t.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var e=-1,r=function t(){for(;++e<a.length;)if(i.call(a,e))return t.value=a[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=m,l(f,"constructor",m),l(m,"constructor",p),p.displayName=l(m,o,"GeneratorFunction"),a.isGeneratorFunction=function(a){var t="function"==typeof a&&a.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,m):(a.__proto__=m,l(a,o,"GeneratorFunction")),a.prototype=Object.create(f),a},a.awrap=function(a){return{__await:a}},y(b.prototype),l(b.prototype,r,(function(){return this})),a.AsyncIterator=b,a.async=function(t,i,e,s,r){void 0===r&&(r=Promise);var o=new b(n(t,i,e,s),r);return a.isGeneratorFunction(i)?o:o.next().then((function(a){return a.done?a.value:o.next()}))},y(f),l(f,o,"Generator"),l(f,s,(function(){return this})),l(f,"toString",(function(){return"[object Generator]"})),a.keys=function(a){var t=[];for(var i in a)t.push(i);return t.reverse(),function i(){for(;t.length;){var e=t.pop();if(e in a)return i.value=e,i.done=!1,i}return i.done=!0,i}},a.values=L,q.prototype={constructor:q,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!a)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var t=this;function e(i,e){return o.type="throw",o.arg=a,t.next=i,e&&(t.method="next",t.arg=void 0),!!e}for(var s=this.tryEntries.length-1;s>=0;--s){var r=this.tryEntries[s],o=r.completion;if("root"===r.tryLoc)return e("end");if(r.tryLoc<=this.prev){var l=i.call(r,"catchLoc"),n=i.call(r,"finallyLoc");if(l&&n){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!n)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(a,t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.tryLoc<=this.prev&&i.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===a||"continue"===a)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=a,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(o)},complete:function(a,t){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&t&&(this.next=t),d},finish:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===a)return this.complete(i.completion,i.afterLoc),j(i),d}},catch:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===a){var e=i.completion;if("throw"===e.type){var s=e.arg;j(i)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(a,t,i){return this.delegate={iterator:L(a),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=void 0),d}},a}function y(a,t,i,e,s,r,o){try{var l=a[r](o),n=l.value}catch(a){return void i(a)}l.done?t(n):Promise.resolve(n).then(e,s)}function b(a){return function(){var t=this,i=arguments;return new Promise((function(e,s){var r=a.apply(t,i);function o(a){y(r,e,s,o,l,"next",a)}function l(a){y(r,e,s,o,l,"throw",a)}o(void 0)}))}}const x={components:{ItemPrice:i(8607).Z},data:function(){return{item:{}}},created:function(){var a=this;return b(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.getItemData();case 2:case"end":return t.stop()}}),t)})))()},methods:{getItemData:function(){var a=this;return b(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.axios.get("items/"+a.$route.params.id).then((function(t){a.item=t.data.item}));case 1:case"end":return t.stop()}}),t)})))()}}};const P=(0,i(3744).Z)(x,[["render",function(a,t,i,g,w,y){return(0,e.wg)(),(0,e.iD)("div",s,[(0,e._)("div",r,[(0,e._)("div",o,[l,(0,e._)("div",n,[(0,e._)("div",c,[(0,e._)("div",d,[(0,e._)("h4",u,[(0,e._)("a",p,(0,e.zw)(w.item.name),1)]),m]),v])])]),h,_,f])])}]])},2656:(a,t,i)=>{var e={"./en/data.json":2237,"./fn/data.json":8875,"./jp/data.json":3986,"./mm/data.json":6002};function s(a){var t=r(a);return i(t)}function r(a){if(!i.o(e,a)){var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}return e[a]}s.keys=function(){return Object.keys(e)},s.resolve=r,a.exports=s,s.id=2656},2237:a=>{"use strict";a.exports=JSON.parse('{"Categories":"All Categories","Feature":"Featured Products","Gaming":"Gaming Products","Best":"Best Seller Products","Brands":"Our Brands","Colors":"Colors","Subscribe":"Subscribe Our Newsletter","Register":"Register","Create Account":"Create Account","Placeholder Name":"Enter Your Name","Placeholder Email":"Enter Your Email","Placeholder Password":"Password","Placeholder Confirm":"Confirm Password","Agree Policy":"I agree to terms & Policy.","Have Account":"Already have an account?","No Account":"Don\'t have an account?","Login":"Login","Compare":"Compare","Filter":"Filter"}')},8875:a=>{"use strict";a.exports=JSON.parse('{"Categories":"Toutes Catégories","Feature":"Produits populaires","Gaming":"Produits de jeu","Best":"Produits les plus vendus","Brands":"Nos marques","Colors":"Couleurs","Subscribe":"Abonnez-vous à notre newsletter","Register":"S\'inscrire","Create Account":"Créer un compte","Placeholder Name":"Entrez votre nom","Placeholder Email":"Entrer votre Email","Placeholder Password":"Mot de passe","Placeholder Confirm":"Confirmez le mot de passe","Agree Policy":"J\'accepte les termes et la politique.","Have Account":"Vous avez déjà un compte?","No Account":"Vous n\'avez pas de compte?","Login":"Connexion","Compare":"Comparer","Filter":"Filtre"}')},3986:a=>{"use strict";a.exports=JSON.parse('{"Categories":"すべてのカテゴリ","Feature":"おすすめ商品","Gaming":"ゲーム製品","Best":"ベストセラー商品","Brands":"我々のブランド","Colors":"色","Subscribe":"ニュースレターを購読する","Register":"登録","Create Account":"アカウントを作成する","Placeholder Name":"あなたの名前を入力してください","Placeholder Email":"メールアドレスを入力","Placeholder Password":"パスワード","Placeholder Confirm":"パスワードを認証する","Agree Policy":"規約とポリシーに同意します。","Have Account":"すでにアカウントをお持ちですか？","No Account":"アカウントをお持ちでない場合?","Login":"ログイン","Compare":"比較","Filter":"フィルター"}')},6002:a=>{"use strict";a.exports=JSON.parse('{"Categories":"အမျိုးအစားအားလုံး","Feature":"အထူးအသားပေး ထုတ်ကုန်များ","Gaming":"ဂိမ်းထုတ်ကုန်များ","Best":"ရောင်းအားအကောင်းဆုံး ထုတ်ကုန်များ","Brands":"ကျွန်ုပ်တို့၏အမှတ်တံဆိပ်များ","Colors":"အရောင်များ","Subscribe":"ကျွန်ုပ်တို့၏သတင်းလွှာကို စာရင်းသွင်းပါ။","Register":"မှတ်ပုံတင်ပါ။","Create Account":"အကောင့်ပြုလုပ်ပါ","Placeholder Name":"သင့်အမည်ကို ထည့်သွင်းပါ","Placeholder Email":"သင့်၏အီးမေးလ်လိပ်စာထည့်ပါ","Placeholder Password":"စကားဝှက်","Placeholder Confirm":"စကားဝှက်အတည်ပြုပါ","Agree Policy":"စည်းမျဉ်းများနှင့် မူဝါဒကို သဘောတူပါသည်။","Have Account":"အကောင့်ရှိပြီးသားလား?","No Account":"အကောင့်မရှိဘူးလား?","Login":"အကောင့်ဝင်ရန်","Compare":"နှိုင်းယှဉ်ပါ","Filter":"စီစစ်ပါ"}')}}]);