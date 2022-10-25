import { mainMixinData } from './main';

export var mixin = {
  mixins: [mainMixinData],
  data() {
    return {
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
  }
}