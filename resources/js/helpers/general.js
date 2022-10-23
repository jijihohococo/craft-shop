
import { userLang } from '../store.js';

export function thousandSeprator(x){
     return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function translate(data) {
	var file=require('../lang/'+userLang.data+'/data.json')
	return file[data]
}

export function showSwalLoading(object) {
    object.$swal({
        title: 'Now loading',
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        onOpen: () => {
          swal.showLoading();
      }
  }).then(
  () => {},
  (dismiss) => {
      if (dismiss === 'timer') {
        object.$swal.close;
    }
} )
}