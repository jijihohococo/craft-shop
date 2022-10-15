
import { userLang } from '../store.js';

export function thousandSeprator(x){
     return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function translate(data) {
	var file=require('../lang/'+userLang.data+'/data.json')
	return file[data]
}