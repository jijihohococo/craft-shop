<template>
	<div class="product_info">
		<h6 class="product_title"><a href="shop-product-detail.html">{{ item.name }}</a></h6>
		<ItemPrice
		:normal_price="item.normal_price"
		:sale_price="item.sale_price"
		/>
		<div class="rating_wrap">
			<div class="rating">
				<div class="product_rate"
				:style="{ 'width': getAveragePercent(item.reviews) }"
				 ></div>
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
</template>
<script >
	import ItemPrice from './ItemPrice'
	import { showAveragePercent } from '../helpers/general.js';
	export default {
		components : {
			ItemPrice
		},
		props : ['item'],
		methods : {
			getAveragePercent(data){
				var result= data!==null ?
				showAveragePercent(data.split(',')) : 0;
				return result + '%';
			}
		}
	}
</script>