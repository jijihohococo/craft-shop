<template>
	<div class="product_info">
		<h6 class="product_title"><router-link :to="{name:'items.detail',params:{id:item.link}}">{{ item.name }}
		</router-link></h6>
		<div class="">
				<ul class="list_none pr_action_btn">
					<li class="hand_cursor">
						<a @click="addToCart()">
							<i class="icon-basket-loaded"></i>
						</a>
					</li>
					<li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
					<WishButton :item_id="item.id" />
				</ul>
			</div>
		<ItemPrice
		:normal_price="normalPrice"
		:sale_price="salePrice"
		/>
		<div class="rating_wrap">
			<div class="rating">
				<div class="product_rate"
				:style="{ 'width': getAveragePercent(item.reviews) }"
				></div>
			</div>
			<span class="rating_num">{{ item.review==null ? '0' : item.reviews.split(',').length }}</span>
		</div>
		<div class="pr_desc">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
		</div>
		<ItemColor v-if="item.colorCodes!==null"
		:colors="item.colorCodes.split(',')"
		@getData="getColor" />
	</div>
</template>
<script >
	import ItemPrice from './ItemPrice'
	import ItemColor from './ItemColor'
	import WishButton from './WishButton'
	import { showAveragePercent } from '../helpers/general.js';
	import { mixin } from '../common/';
	export default {
		components : {
			ItemPrice,
			ItemColor,
			WishButton
		},
		mixins : [mixin],
		data(){
			return {
				normalPrice : 0,
				salePrice : 0 ,
				currentItemVariant : 0
			}
		},
		props : {
			item  : {
				type : Object
			}
		},
		created(){
			this.normalPrice=this.$props.item.normal_price
			this.salePrice=this.$props.item.sale_price
		},
		methods : {
			getAveragePercent(data){
				var result= data!==null ?
				showAveragePercent(data.split(',')) : 0;
				return result + '%';
			},
			getColor(key){
				let colorCode=this.item.colorCodes.split(',')[key]
				colorCode=colorCode.replace('#','')
				this.currentItemVariant=key;
				window.axios.get('item_by_color_code/'+colorCode).then((response)=>{
					let item=response.data.item
					this.normalPrice=item.normal_price
					this.salePrice=item.sale_price
				})
			},
			addToCart(){
				let variantId=this.$props.item.variants.split(',')[this.currentItemVariant]
				window.axios.post( 'add_item_to_shopping_cart/'+variantId ).then( (response) => {
					this.$swal( 'Success' ,
						response.data.message ,
						'success'  );
					this.changeShoppingCart(response);
				} )
			}
		}
	}
</script>