require('./bootstrap');

import { reactive } from 'vue'

function getShop(shop){

  window.axios.get('shop').then( (response) => {
    shop=response.data.shop
  })

}

export const userLang=reactive({
  data : window.cookies.get('lang') ? window.cookies.get('lang') : 'en',
  changeData(data){
    this.data=data;
    window.cookies.set("lang",data,"1D", null, null, null, "Lax");
  }
})

export const shop = reactive( {
  data : window.shop ,
  changeData(data) {
    this.data=data;
  }
} )

export const admin= reactive ({
  data : {} ,
  changeData(data){
    this.data=data;
  }
})

export const user = reactive ({
  data : {},
  changeData(data){
    this.data=data;
  }
})

export const currentYear = new Date().getFullYear()
