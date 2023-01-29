<template>
	<li class="hand_cursor">
		<a @click="addToWishlist(item_id)">
			<i class="icon-heart"></i>
		</a>
	</li>
</template>
<script >
	import {wishlist_items} from '../store/';

	export default {
		name : "WishButton",
		data(){
			return {
				wishlist_items
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
				} )
			}
		}
	}
</script>