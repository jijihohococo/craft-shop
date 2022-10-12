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
					<div class="product_slider product_list carousel_slider owl-carousel owl-theme nav_style3 horizContainer" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "767":{"items": "2"}, "991":{"items": "3"}, "1199":{"items": "3"}}' v-if="feature_products && feature_products.length>0">
						<FeatureProduct :feature_products="one_feature_products" />
						<FeatureProduct :feature_products="two_feature_products" />
						<FeatureProduct :feature_products="three_feature_products" />
						<FeatureProduct :feature_products="four_feature_products" />
						<FeatureProduct :feature_products="five_feature_products" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END SECTION SHOP -->
	<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
	
	import FeatureProduct from './FeatureProduct'
	import { translate } from '../../helpers/general.js'
	

	export default {
		components : {
			FeatureProduct
		},
		name : 'FeatureProducts' ,
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