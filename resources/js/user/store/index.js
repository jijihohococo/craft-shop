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

export const wishlist_item_ids=reactive({
  data : [],
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

export const menu_show=reactive({
  data : true ,
  changeData(routeName,mobile){
      this.data=(routeName=='home') ||
      (routeName!=='home' && mobile==true) ? 
      true : false
  },
  changeShow(){
    this.data = ! this.data
  }
})

export const mobile=reactive({
  data : false ,
  checkMobile(){
    this.data=(window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth)>991 ? false : true;
  }
})