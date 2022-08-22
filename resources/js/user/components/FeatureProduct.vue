<template>
	<!-- START SECTION SHOP -->
	<div class="section small_pt pb_20">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="heading_tab_header">
						<div class="heading_s2">
							<h2>Featured Products</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="product_slider product_list carousel_slider owl-carousel owl-theme nav_style3" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "767":{"items": "2"}, "991":{"items": "3"}, "1199":{"items": "3"}}' v-if="feature_products && feature_products.length>0">
						<div class="item">
							<div class="product" v-for="item in one_feature_products">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img1.jpg" alt="product_img1">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">{{ item.name }}</a></h6>
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
								</div>
							</div>
						</div>
						<div class="item">
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img2.jpg" alt="product_img2">
									</a>
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
								</div>
							</div>
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img7.jpg" alt="product_img7">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
									<div class="product_price">
										<span class="price">$68.00</span>
										<del>$99.00</del>
										<div class="on_sale">
											<span>20% Off</span>
										</div>
									</div>
									<div class="rating_wrap">
										<div class="rating">
											<div class="product_rate" style="width:87%"></div>
										</div>
										<span class="rating_num">(25)</span>
									</div>
								</div>
							</div>
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img10.jpg" alt="product_img10">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">Red &amp; Black check shirt</a></h6>
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
								</div>
							</div>
						</div>
						<div class="item">
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img3.jpg" alt="product_img3">
									</a>
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
								</div>
							</div>
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img8.jpg" alt="product_img8">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">Men blue jins Shirt</a></h6>
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
								</div>
							</div>
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img13.jpg" alt="product_img13">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">Pink Dress for woman</a></h6>
									<div class="product_price">
										<span class="price">$65.00</span>
										<del>$80.00</del>
										<div class="on_sale">
											<span>30% Off</span>
										</div>
									</div>
									<div class="rating_wrap">
										<div class="rating">
											<div class="product_rate" style="width:80%"></div>
										</div>
										<span class="rating_num">(28)</span>
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
								</div>
							</div>
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img9.jpg" alt="product_img9">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">T-Shirt Form Girls</a></h6>
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
								</div>
							</div>
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img14.jpg" alt="product_img14">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">White shirt for man</a></h6>
									<div class="product_price">
										<span class="price">$55.00</span>
										<del>$60.00</del>
									</div>
									<div class="rating_wrap">
										<div class="rating">
											<div class="product_rate" style="width:68%"></div>
										</div>
										<span class="rating_num">(15)</span>
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
								</div>
							</div>
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img11.jpg" alt="product_img11">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">Black dress for woman</a></h6>
									<div class="product_price">
										<span class="price">$68.00</span>
										<del>$99.00</del>
										<div class="on_sale">
											<span>20% Off</span>
										</div>
									</div>
									<div class="rating_wrap">
										<div class="rating">
											<div class="product_rate" style="width:87%"></div>
										</div>
										<span class="rating_num">(25)</span>
									</div>
								</div>
							</div>
							<div class="product">
								<div class="product_img">
									<a href="shop-product-detail.html">
										<img src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img15.jpg" alt="product_img15">
									</a>
								</div>
								<div class="product_info">
									<h6 class="product_title"><a href="shop-product-detail.html">Pink Dress for Baby Kids</a></h6>
									<div class="product_price">
										<span class="price">$55.00</span>
										<del>$60.00</del>
									</div>
									<div class="rating_wrap">
										<div class="rating">
											<div class="product_rate" style="width:68%"></div>
										</div>
										<span class="rating_num">(15)</span>
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
</template>
<script >
	export default {
		name : 'FeatureProduct' ,
		data () {
			return {
				feature_products : {},
				one_feature_products : [],
				two_feature_products : [] ,
				three_feature_products : [],
				four_feature_products : [],
				five_feature_products : []
			}
		},
		async created(){
			await this.getData()
		},
		methods : {
			makeArray(arrayData,newArray){
				arrayData.forEach( (key) => {
					if(Object.values(this.feature_products)[key]!==undefined ){
						newArray.push(Object.values(this.feature_products)[key])
					}
				})
			},
			async getData(){
				window.axios.get('feature_products').then( (response) => {
					this.feature_products=response.data.feature_products
					const oneArray=[0,1,2]
					const twoArray=[3,4,5]
					const threeArray=[6,7,8]
					const fourArray=[9,10,11]
					const fiveArray=[12,13,14]
					this.makeArray(oneArray,this.one_feature_products)
					this.makeArray(twoArray,this.two_feature_products)
					this.makeArray(threeArray,this.three_feature_products)
					this.makeArray(fourArray,this.four_feature_products)
					this.makeArray(fiveArray,this.five_feature_products)
				})
			}
		}
	}
</script>