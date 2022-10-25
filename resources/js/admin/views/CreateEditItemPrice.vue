<template>
	<ContentHeader :header="header" 
	:back_links="[
	{ 'route' : '/admin/item' , 'title' : 'Item' },
	{ 'route' : '/admin/item/variant/'+itemVariant.id , 'title' : itemColor } ,
	{ 'route' : '/admin/item/price/'+itemVariant.id , 'title' : price }
	]" />
</template>
<script >

	import { errorResponse , checkContentPermission , getItemColor } from '../helpers/check';

	import { showSwalLoading } from  '../../helpers/general'

	import { mixin } from '../common/'

	export default {
		mixins: [mixin],
		data(){
			return {
				content : 'ItemStock',
				itemVariant : {},
				itemColor : '' ,
				header : '' ,
				price : '' ,
				currencies : {},
				fields : {
					currency_id : '' ,
					price : '',
				}
			}
		},
		
	}
</script>