<template>
	<div class="main_content">
		<div class="section">
			<div class="container">
				<div class="row">
					<div class="col-lg-9">
						<div class="row align-items-center mb-4 pb-1">
							<div class="col-12">
								<div class="product_header">
									<div class="product_header_left">
										<div class="custom_select">
											<select class="form-control form-control-sm" v-model="current_sorting">
												<option v-for="sorting in sortings"
												:value="sorting.value"
												>
												{{ sorting.content }}
											</option>
										</select>
									</div>
								</div>
								<div class="product_header_right">
									<div class="products_view">
										<a class="shorting_icon grid hand_cursor active"><i class="ti-view-grid"></i></a>
										<a class="shorting_icon list hand_cursor"><i class="ti-layout-list-thumb"></i></a>
									</div>
									<div class="custom_select">
										<select class="form-control form-control-sm" v-model="current_showing">
											<option v-for="showing in showings"
											>
											{{ showing }}	
										</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div> 
				<div class="row shop_container grid">
					<div class="col-md-4 col-6" v-for="item in items.data">
						<SliderItem :item="item" />
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<Pagination :page="items.current_page" 
						:lastPage="items.last_page" 
						@getData="getItems" 
						@searchData="searchItems"
						:search="search" 
						:from="items.from" 
						:to="items.to" 
						:total="items.total"
						ulClass="pagination mt-3 justify-content-center pagination_style1" />
					</div>
				</div>
			</div>
			<div class="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
				<div class="sidebar">
					<div class="widget">
						<h5 class="widget_title">{{ translateLang("Filter") }}</h5>
						<div class="row">
							<div class="col-5">
								<input type="text" class="form-control" v-model="min_price" placeholder="Min">
							</div>
							<div class="mt-2">
								-
							</div>
							<div class="col-5">
								<input type="text" class="form-control" v-model="max_price" placeholder="Max">
							</div>
						</div>
						<div class="row mt-2">
							<a class="btn btn-fill-out btn-block" 
							v-on:click="filterItems()">Filter</a>
						</div>
							<!-- <PriceFilter 
							v-if="max_price>0"
							:min_val="min_price"
							:max_val="max_price" /> -->
						</div>
						<List :title="translateLang('Brands')" 
						:list="brands"
						:select_list="currentBrands"
						route_query="brands"
						@updatePage="updatePageData"
						/>
						<List :title="translateLang('Colors')"
						:list="colors"
						:select_list="currentColors"
						route_query="colors"
						@updatePage="updatePageData"
						/>
						<List v-for="attribute in attributes"
						:title="attribute.name"
						:list="attribute.sets"
						:select_list="currentSets"
						route_query="sets"
						column="set"
						value="id"
						@updatePage="updatePageData"
						/>
						<div class="widget">
							<div class="shop_banner">
								<div class="banner_img overlay_bg_20">
									<img src="assets/images/sidebar_banner_img.jpg" alt="sidebar_banner_img">
								</div> 
								<div class="shop_bn_content2 text_white">
									<h5 class="text-uppercase shop_subtitle">New Collection</h5>
									<h3 class="text-uppercase shop_title">Sale 30% Off</h3>
									<a href="#" class="btn btn-white rounded-0 btn-sm text-uppercase">Shop Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div><!-- 
	<component is="script" src="/user/js/scripts.js" /> -->
</template>
<script >
	import List from '../components/List'
	import PriceFilter from '../components/PriceFilter'
	import SliderItem from '../components/SliderItem'
	import { common_mixin } from '../../common/'
	import { mix } from '../common/ui'
	import Pagination from '../../components/Pagination';
	import {categories} from '../store/';
	export default {
		components : {
			List,
			PriceFilter,
			SliderItem,
			Pagination
		},
		data(){
			return {
				categories,
				search : null ,
				link : '' ,
				currentRoute: null ,
				currentBrands : [] ,
				currentColors : [] ,
				currentCategories : [] ,
				currentSubcategories : [] ,
				currentSets : [] ,
				currentCollections : [],
				brands : {} ,
				colors : {} ,
				attributes : {} ,
				items : {} ,
				max_price : null ,
				min_price : null ,
				current_sorting : 'id' ,
				sortings : [
				{
					'value' : "id" ,
					'content' : "Sort by newness" 
				},
				{
					'value' : "price_high",
					'content' : "Sort by price High To Low"
				},
				{
					'value' : "price_low",
					'content' : "Sort by price Low To High"
				},
				{
					'value' : "user_review",
					'content' : "Sort by user review"
				}
				] ,
				current_showing : 9 ,
				showings : [ 9 , 12 , 18 ]
			}
		},
		created(){
			this.main()
		},
		mounted : () => {
			$('.shorting_icon').on('click',function() {
				if ($(this).hasClass('grid')) {
					$('.shop_container').removeClass('list').addClass('grid');
					$(this).addClass('active').siblings().removeClass('active');
				}
				else if($(this).hasClass('list')) {
					$('.shop_container').removeClass('grid').addClass('list');
					$(this).addClass('active').siblings().removeClass('active');
				}
				$(".shop_container").append('<div class="loading_pr"><div class="mfp-preloader"></div></div>');
				setTimeout(function(){
					$('.loading_pr').remove();
			//console.log($container)
			//$container.isotope('layout');
				}, 800);
			});
		},
		mixins: [common_mixin,mix],
		watch : {
			$route : {
				deep : true ,
				handler(){
					var routes=[
						'shop_category',
						'shop_subcategory',
						'shop_brand',
						'shop_all'
						];
					if(routes.includes(this.$route.name)){
						this.main()
					}
				}
			},
			current_sorting : {
				handler(newValue,oldValue){
					this.getItems()
				}
			},
			current_showing : {
				handler(newValue,oldValue){
					this.getItems()
				}
			}
		},
		methods : {
			main(){
				this.link=this.$route.params.link==undefined ?
				this.link :
				this.$route.params.link;
				
				this.currentRoute=this.getRouteName(this.$route.name);
				this.currentBrands=this.getCurrentContent('brand','brands');
				this.currentCategories=this.getCurrentContent('category','categories')
				this.currentSubcategories=this.getCurrentContent('subcategory','subcategories')
				this.currentCollections=this.getCurrentContent('collection','collections')
				this.currentColors=this.getCurrentFilters('colors');
				this.currentSets=this.getCurrentFilters('sets');
				this.min_price=this.getRouteData('min_price');
				this.max_price=this.getRouteData('max_price');
				this.getContent('brands')
				this.getContent('colors')
				this.getContent('attributes')
				this.getItems()
			},
			getCurrentContent(content,plural){
				return this.currentRoute==content &&
				this.link!==null ?
				[this.link] : this.getCurrentFilters(plural) 
			},
			getRouteData(data){
				return this.$route.query.hasOwnProperty(data) ?
				this.$route.query[data] : null;
			},
			getCurrentFilters(data){
				return this.$route.query.hasOwnProperty(data) ?
				this.$route.query[data].split(',') :
				[]
			},
			getRouteName(name){
				return name.replace('shop_','')
			},
			searchItems(){

			},
			getParamData(data){
				return data.length===0 ? '' : data.toString()
			},
			filterItems(){
				this.refreshPage(
					this.getParamData(this.currentBrands),
					this.getParamData(this.currentColors),
					this.getParamData(this.currentSets),
					this.min_price,
					this.max_price
					)
			},
			getItems(){
				window.axios.get('shop',{
					params : {
						brands : this.getParamData(this.currentBrands),
						colors : this.getParamData(this.currentColors),
						sets : this.getParamData(this.currentSets),
						categories : this.getParamData(this.currentCategories) ,
						subcategories : this.getParamData(this.currentSubcategories) ,
						collections : this.getParamData(this.currentCollections) ,
						min_price : this.min_price,
						max_price : this.max_price,
						sorting : this.current_sorting,
						showing : this.current_showing
					}
				}).then( (response) => {
					this.items=response.data.items
						// this.max_price=parseInt(response.data.max_price)
						// this.min_price=parseInt(response.data.min_price)
				} )
			},
			getContent(content){
				window.axios.get('get_' +
					content + 
					'_by_content' +'/'+
					this.currentRoute +'/'+
					this.link).then( (response) => {
						this[content]=response.data[content]
					} )
				},
				refreshPage(brands,colors,sets,minPrice,maxPrice){
					let pathData='/shop/'+
					this.currentRoute
					+ '/' + this.link;

					this.$router.push({
						path : pathData ,
						query : {
							'brands' : brands ,
							'colors' : colors ,
							'sets' : sets ,
							'min_price' : minPrice ,
							'max_price' : maxPrice
						}
					})
					this.getItems()
				},
				updatePageData(data,selectedList){

					let brands=this.getParamData(this.currentBrands);
					let colors= this.getParamData(this.currentColors);
					let sets=this.getParamData(this.currentSets) ;
					let minPrice=this.getRouteData('min_price');
					let maxPrice=this.getRouteData('max_price');
					switch(data){
					case 'brands':
						brands=selectedList.toString();
						break;

					case 'colors':
						colors=selectedList.toString();
						break;

					case 'sets':
						sets=selectedList.toString();
						break;
					}

					this.refreshPage(brands,colors,sets,minPrice,maxPrice)

				}
			}
		}
	</script>