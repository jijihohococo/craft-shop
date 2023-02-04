<template>
	<li class="hand_cursor">
		{{ wishlist_item_ids.data }}
		<a @click="addToWishlist(item_id)">
			<i :class="[ wishlist_item_ids.data.includes(item_id) ? 'icon-heart selected_color' : 'icon-heart']"></i>
		</a>
	</li>
</template>
<script >
	import {wishlist_items,wishlist_item_ids} from '../store/';

	export default {
		name : "WishButton",
		data(){
			return {
				wishlist_items,
				wishlist_item_ids
			}
		},
		props : {
			item_id : {
				type : Number
			}
		},
		methods : {
			addToWishlist(itemId){
				window.axios.post('add_item_to_wishlist?item_id='+itemId).then( (response) => {
					this.$swal( 'Success' ,
						response.data.message ,
						'success'  );
					this.wishlist_items.changeData(response.data.wishlist_items)
					this.wishlist_item_ids.changeData(itemId)
				} )
			}
		}
	}
</script>