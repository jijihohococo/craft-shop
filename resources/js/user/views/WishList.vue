<template>
	<!-- START SECTION SHOP -->
	<div class="main_content">

		<PageTitle title="Wishlist" />
		
		<div class="section">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="table-responsive wishlist_table">
							<table class="table">
								<thead>
									<tr>
										<th class="product-thumbnail">&nbsp;</th>
										<th class="product-name">Product</th>
										<th class="product-price">Price</th>
										<th class="product-add-to-cart"></th>
										<th class="product-remove">Remove</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in wishlist_items.data">
										<td class="product-thumbnail">
											<router-link :to="{name:'items.detail',params:{id:item.item_link}}">
												<v-lazy-image 
												:src="showImage(item.item_image)"
												:alt="item.item_name" />
											</router-link>
										</td>
										<td class="product-name" data-title="Product">{{ item.item_name }}</td>
										<td class="product-price" data-title="Price">
											<ItemPrice
											:normal_price="item.normal_price"
											:sale_price="item.sale_price" />
										</td>
										<td class="product-add-to-cart"><a href="#" class="btn btn-fill-out"><i class="icon-basket-loaded"></i> Add to Cart</a></td>
										<td class="product-remove" data-title="Remove"><a 
											@click="removeFromWishlist(item.id)"><i class="hand_cursor ti-close"></i></a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END SECTION SHOP -->
	</div>
	<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
	import PageTitle from '../components/PageTitle'
	import ItemPrice from '../components/ItemPrice'
	import {wishlist_items,wishlist_item_ids} from '../store/';
	import { mixin } from '../common/';
	import { mix } from '../common/ui'
	import VLazyImage from "v-lazy-image"

	export default {
		components : {
			PageTitle,
			ItemPrice,
			VLazyImage
		},
		mixins: [mixin,mix]
	}
</script>