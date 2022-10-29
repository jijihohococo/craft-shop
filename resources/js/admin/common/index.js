import { mainMixinData } from './main';

import { showSwalLoading } from  '../../helpers/general'

export var mixin = {
  mixins: [mainMixinData],
  data() {
    return {
      return_link  : '',
      errors : {
        error_status : 0 ,
        error_title : '',
        error_description : ''
      },
      actions : {
        create : '',
        update : ''
      },
      current : null
    }
  },
  methods : {
    returnBack(response){
      if(response.data.message=='Loading'){

        showSwalLoading(this);
      }else{
        this.$swal( 'Success' ,
          response.data.message ,
          'success'  );
        this.$router.push({path: '/admin/'+this.return_link })
      }
    }
  }
}