<template>
	<!-- START SECTION SHOP -->
	<div class="section small_pt pb_20">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="heading_tab_header">
						<div class="heading_s2">
							<h2>{{ translateLang('Feature') }}</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="product_slider product_list carousel_slider nav_style3">
						<Carousel
						v-if="feature_products && feature_products.length>0"
						:items-to-show="3"
						:wrapAround="true"
						:breakpoints="breakpoints"
						snap-align="center">
						<Slide v-for="item in one_feature_products"
						:key="item.id">
							<div class="item">
								<FeatureProduct
								:item="item" />
							</div>
						</Slide>
						<Slide v-for="item in two_feature_products"
						:key="item.id">
							<div class="item">
								<FeatureProduct
								:item="item" />
							</div>
						</Slide>
						<Slide v-for="item in three_feature_products"
						:key="item.id">
							<div class="item">
								<FeatureProduct
								:item="item" />
							</div>
						</Slide>
						<Slide v-for="item in four_feature_products"
						:key="item.id">
							<div class="item">
								<FeatureProduct
								:item="item" />
							</div>
						</Slide>
						<Slide v-for="item in five_feature_products"
						:key="item.id">
							<div class="item">
								<FeatureProduct
								:item="item" />
							</div>
						</Slide>
					</Carousel>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- END SECTION SHOP -->
</template>
<script >
	
	import FeatureProduct from './FeatureProduct'
	import { translate } from '../../helpers/general.js'
	import { Carousel,Slide } from 'vue3-carousel'
	export default {
		components : {
			FeatureProduct,
			Carousel,
			Slide
		},
		name : 'FeatureProducts' ,
		data () {
			return {
				feature_products : {},
				one_feature_products : [],
				two_feature_products : [] ,
				three_feature_products : [],
				four_feature_products : [],
				five_feature_products : [],
				breakpoints : {
					0: {
						itemsToShow: 1
					},
					767: {
						itemsToShow:2
					},
					991: {
						itemsToShow:3
					},
					1199: {
						itemsToShow:3
					}
				}
			}
		},
		async created(){
			await this.getData()
		},
		methods : {
			translateLang(data){
				return  translate(data);
			},
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