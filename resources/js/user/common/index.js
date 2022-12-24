import {shopping_cart_items,shopping_total_qty,shopping_total_price} from '../store/';

export var mixin={
	data(){
		return {
			shopping_cart_items,
			shopping_total_qty,
			shopping_total_price
		}
	},
	methods : {
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
					totalPrice+=item.sale_price
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
		}
	}
}