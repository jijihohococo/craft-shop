<template>
	<li class="hand_cursor">
		<a v-if="wishlist_item_ids.data.includes(item_id)"
		@click="removeFromWishlist(item_id)">
			<i class="icon-heart selected_color"></i>
		</a>
		<a v-else @click="addToWishlist(item_id)">
			<i class="icon-heart" ></i>
		</a>
	</li>
</template>
<script >
	import { mixin } from '../common/';
	export default {
		name : "WishButton",
		mixins : [mixin],
		props : {
			item_id : {
				type : Number
			}
		}
	}
</script>