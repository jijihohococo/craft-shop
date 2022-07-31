require('./bootstrap');

import { reactive } from 'vue'

function getShop(shop){

  window.axios.get('shop').then( (response) => {
    shop=response.data.shop
  })

}

export const shop = reactive( {
  data : window.shop ,
  changeData(data) {
    this.data=data;
  }
} )
