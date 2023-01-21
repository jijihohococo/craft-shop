import { reactive } from 'vue'

export const categories=reactive({
  data : [] ,
  changeData(data){
    this.data=data;
  }
})

export const wishlist_items=reactive({
  data : [] ,
  changeData(data){
    this.data=data;
  }
})

export const shopping_cart_items=reactive ({
  data : [] ,
  changeData(data){
    this.data=data;
  }
})

export const shopping_total_qty=reactive({
  data  : 0,
  changeData(data){
    this.data=data;
  }
})

export const shopping_total_price=reactive({
  data : 0,
  changeData(data){
    this.data=data;
  }
})