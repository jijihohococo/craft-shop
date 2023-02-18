<template>
	<div class="product_info">
		<h6 class="product_title"><a href="shop-product-detail.html">{{ item.name }}</a></h6>
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
	import { showAveragePercent } from '../helpers/general.js';
	export default {
		components : {
			ItemPrice,
			ItemColor
		},
		data(){
			return {
				normalPrice : 0,
				salePrice : 0
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
				window.axios.get('item_by_color_code/'+colorCode).then((response)=>{
					let item=response.data.item
					this.normalPrice=item.normal_price
					this.salePrice=item.sale_price
				})
				this.$emit('getData',key)
			}
		}
	}
</script>