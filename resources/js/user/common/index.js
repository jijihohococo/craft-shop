import {shopping_cart_items,
shopping_total_qty,
shopping_total_price,
wishlist_items,
wishlist_item_ids} from '../store/';

export var mixin={
	data(){
		return {
			shopping_cart_items,
			shopping_total_qty,
			shopping_total_price,
			wishlist_items,
			wishlist_item_ids
		}
	},
	methods : {
		removeFromWishlist(id){
			window.axios.post('remove_item_from_wishlist?id='+id).then( (response) => {
				this.wishlist_items.changeData(response.data.wishlist_items)
			} )
		},
		showImage(image){
			return image==null ? '/images/logo_dark.png' :
			'/image/item_images/' + image
		},
		changeShoppingCart(response){
			let totalQty=0;
			let totalPrice=0;
			this.shopping_cart_items.changeData(response.data.shopping_cart_items)
			switch(this.shopping_cart_items.data.length){
			case 0:
				this.shopping_total_qty.changeData(0)
				this.shopping_total_price.changeData(0)
				break;

			default:
				this.shopping_cart_items.data.forEach((item)=>{
					totalQty+=item.qty
					totalPrice+=parseFloat(item.sale_price)
				})
				this.shopping_total_qty.changeData(totalQty)
				this.shopping_total_price.changeData(totalPrice)
				break;
			}
		},
		removeFromCart(id){
			window.axios.post('remove_item_from_shopping_cart?id='+id).then( (response) => {
				this.changeShoppingCart(response)
			} )
		},
		async getShoppingCartItems(){
			window.axios.get('shopping_cart').then( (response) => {
				this.changeShoppingCart(response)
			} )
		},
		async getWishListItems(){
			window.axios.get('wishlist').then( (response) => {
				let responseData=response.data
				this.wishlist_items.changeData(responseData.wishlist_items)
				this.wishlist_item_ids.changeData(responseData.wishlist_item_ids)
			} )
		}
	}
}