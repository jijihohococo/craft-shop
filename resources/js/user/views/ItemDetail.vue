<template>
    <Preloader />
    <NotFound v-if="error" />
    <template v-else >
     <div class="section">
       <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                <ItemImages />
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="pr_detail">
                    <div class="product_description">
                        <h4 class="product_title"><a href="#">{{ item.name }}</a></h4>
                        <ItemPrice
                        v-if="currentItemVariant.length!==0"
                        :normal_price="currentItemVariant.normal_price"
                        :sale_price="currentItemVariant.sale_price" />
                        <ItemReview 
                        :review_percent="reviews.averageStarPercent"
                        :reviews="reviews.countItemRate" />
                        
                        <div class="pr_desc">
                            <br>
                            <br>
                        </div>
                        <div class="product_sort_info">
                            <ul>
                                <li><i class="linearicons-shield-check"></i> 1 Year AL Jazeera Brand Warranty</li>
                                <li><i class="linearicons-sync"></i> 30 Day Return Policy</li>
                                <li><i class="linearicons-bag-dollar"></i> Cash on Delivery available</li>
                            </ul>
                        </div>
                        <ItemColorTwo 
                        v-if="currentItemVariant.length!==null"
                        :variants="item.variants"
                        @getData="getColor" />
                    </div>
                    <hr />
                    <div class="cart_extra">
                        <div class="cart-product-quantity">
                            <div class="quantity">
                                <input type="button" value="-" class="minus">
                                <input type="text" name="quantity" value="1" title="Qty" class="qty" size="4">
                                <input type="button" value="+" class="plus">
                            </div>
                        </div>
                        <div class="cart_btn">
                            <button class="btn btn-fill-out btn-addtocart" type="button"><i class="icon-basket-loaded"></i> Add to cart</button>
                            <a class="add_compare" href="#"><i class="icon-shuffle"></i></a>
                            <a class="add_wishlist" href="#"><i class="icon-heart"></i></a>
                        </div>
                    </div>
                    <hr />
                    <ul class="product-meta">
                        <li>SKU: <a href="#">BE45VGRT</a></li>
                        <li>Category: <a href="#">Clothing</a></li>
                        <li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a> </li>
                    </ul>
                    
                    <div class="product_share">
                        <span>Share:</span>
                        <ul class="social_icons">
                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="#"><i class="ion-social-youtube-outline"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
           <div class="col-12">
               <div class="large_divider clearfix"></div>
           </div>
       </div>
       <div class="row">
           <div class="col-12">
               <div class="tab-style3">
                   <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item">
                         <a class="nav-link active" id="Description-tab" data-toggle="tab" href="#Description" role="tab" aria-controls="Description" aria-selected="true">Description</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link" id="Additional-info-tab" data-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Additional info</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" id="Reviews-tab" data-toggle="tab" href="#Reviews" role="tab" aria-controls="Reviews" aria-selected="false">Reviews ({{ reviews.countItemRate }})</a>
                   </li>
               </ul>
               <div class="tab-content shop_info_tab">
                 <div class="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                   {{ item.description }}
               </div>
               <div class="tab-pane fade" id="Additional-info" role="tabpanel" aria-labelledby="Additional-info-tab">
                   <table class="table table-bordered">
                    <tr v-for="data in item.attributes">
                        <td>{{ data.attribute.name }}</td>
                        <td>
                            <template v-for="(d,key) in data.sets">
                             {{ key+1!==data.sets.length ? d.set.set + ',' : d.set.set }}
                         </template>
                     </td>
                 </tr>
             </table>
         </div>
         <div class="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
           <div class="comments">
            <h5 class="product_tab_title">{{ reviews.countItemRate }} Review For <span>{{ item.name }}</span></h5>
            <ul class="list_none comment_list mt-4">
                <li>
                    <div class="comment_img">
                        <img src="assets/images/user1.jpg" alt="user1"/>
                    </div>
                    <div class="comment_block">
                        <div class="rating_wrap">
                            <div class="rating">
                                <div class="product_rate" style="width:80%"></div>
                            </div>
                        </div>
                        <p class="customer_meta">
                            <span class="review_author">Alea Brooks</span>
                            <span class="comment-date">March 5, 2018</span>
                        </p>
                        <div class="description">
                            <p>Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="comment_img">
                        <img src="assets/images/user2.jpg" alt="user2"/>
                    </div>
                    <div class="comment_block">
                        <div class="rating_wrap">
                            <div class="rating">
                                <div class="product_rate" style="width:60%"></div>
                            </div>
                        </div>
                        <p class="customer_meta">
                            <span class="review_author">Grace Wong</span>
                            <span class="comment-date">June 17, 2018</span>
                        </p>
                        <div class="description">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="review_form field_form">
            <h5>Add a review</h5>
            <form class="row mt-3">
                <div class="form-group col-12">
                    <div class="star_rating">
                        <span data-value="1"><i class="far fa-star"></i></span>
                        <span data-value="2"><i class="far fa-star"></i></span> 
                        <span data-value="3"><i class="far fa-star"></i></span>
                        <span data-value="4"><i class="far fa-star"></i></span>
                        <span data-value="5"><i class="far fa-star"></i></span>
                    </div>
                </div>
                <div class="form-group col-12">
                    <textarea required="required" placeholder="Your review *" class="form-control" name="message" rows="4"></textarea>
                </div>
                <div class="form-group col-md-6">
                    <input required="required" placeholder="Enter Name *" class="form-control" name="name" type="text">
                </div>
                <div class="form-group col-md-6">
                    <input required="required" placeholder="Enter Email *" class="form-control" name="email" type="email">
                </div>

                <div class="form-group col-12">
                    <button type="submit" class="btn btn-fill-out" name="submit" value="Submit">Submit Review</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</div>
</div>
<div class="row">
   <div class="col-12">
       <div class="small_divider"></div>
       <div class="divider"></div>
       <div class="medium_divider"></div>
   </div>
</div>
<div class="row">
   <div class="col-12">
       <div class="heading_s1">
           <h3>Releted Products</h3>
       </div>
       <div class="releted_product_slider carousel_slider owl-carousel owl-theme" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
           <div class="item">
            <div class="product">
                <div class="product_img">
                    <a href="shop-product-detail.html">
                        <img src="assets/images/product_img1.jpg" alt="product_img1">
                    </a>
                    <div class="product_action_box">
                        <ul class="list_none pr_action_btn">
                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li>
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
                        <img src="assets/images/product_img2.jpg" alt="product_img2">
                    </a>
                    <div class="product_action_box">
                        <ul class="list_none pr_action_btn">
                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li>
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
                        <img src="assets/images/product_img3.jpg" alt="product_img3">
                    </a>
                    <div class="product_action_box">
                        <ul class="list_none pr_action_btn">
                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li>
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
                        <img src="assets/images/product_img4.jpg" alt="product_img4">
                    </a>
                    <div class="product_action_box">
                        <ul class="list_none pr_action_btn">
                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li>
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
                        <img src="assets/images/product_img5.jpg" alt="product_img5">
                    </a>
                    <div class="product_action_box">
                        <ul class="list_none pr_action_btn">
                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li>
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
</template>
</template>
<script >

    import ItemImages from '../components/ItemImages';

    import ItemPrice from '../components/ItemPrice';

    import ItemReview from '../components/ItemReview';

    import ItemColorTwo from '../components/ItemColorTwo';

    import Preloader from '../components/Preloader'

    import NotFound from  './NotFound'

    import { mix } from '../common/ui'

    export default {
      components : {
        ItemImages,
        ItemPrice,
        ItemReview,
        ItemColorTwo,
        Preloader,
        NotFound
    },
    data(){
       return {
        item : {},
        reviews : {},
        seo : {},
        currentItemVariant : {},
        error : false
    }
},
mixins : [mix],
async created(){
    await this.getItemData()
},
mounted : () => {

},
methods : {
 async getItemData(){
    window.axios.get('items/'+this.$route.params.id).then( (response) => {
       this.item=response.data.item
       this.reviews=response.data.reviews
       this.seo=response.data.seo
       if(this.item.length!==0 && this.item.variants.length!==0 ){
        this.currentItemVariant=this.item.variants[0]
    }
} ).catch((error)=>{
    this.error=true
})
},
getColor(key){
    this.currentItemVariant=this.item.variants[key]
}
}
}
</script>