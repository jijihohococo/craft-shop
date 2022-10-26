import { userLang } from '../store.js';

export var common_mixin={
    data(){
        return { userLang }
    },
    methods : {
        translateLang(data){
            var file=require('../lang/'+this.userLang.data+'/data.json')
            return file[data]
        },
        thousandSeprator(x){
           return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       }
   }
}