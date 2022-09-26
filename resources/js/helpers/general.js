
import { userLang } from '../store.js';

export function translate(data) {
	var file=require('../lang/'+userLang.data+'/data.json')
	return file[data]
}