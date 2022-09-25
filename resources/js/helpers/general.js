

export function translate(data) {
	var lang=window.cookies.get('lang') ? window.cookies.get('lang') : 'en' ;
	var file=require('../lang/'+lang+'/data.json')
	return file[data]
}