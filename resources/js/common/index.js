import { translate } from '../helpers/general.js';

export var common_mixin={
	methods : {
        translateLang(data){
            return  translate(data);
        }
    }
}