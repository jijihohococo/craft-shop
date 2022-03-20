<template>
	<ContentHeader :header="content" />
	<Loading />
</template>
<script >
	import Pagination from '../components/Pagination';

	import Delete from '../components/Delete';

	import ContentHeader from '../components/ContentHeader';

	import CreateButton from '../components/CreateButton';

	import EditButton from '../components/EditButton';

	import Error from '../components/Error';

	import Loading from '../components/Loading';

	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	export default {
		components: {
			Pagination,
			ContentHeader,
			Delete,
			CreateButton,
			EditButton,
			Error,
			Loading
		},
		data () {
			return {
				content : 'Item Stock',
				item_stocks : {},
				search : null ,
				currentPage : 1 ,
				actions : {
					create : '' ,
					read : '' ,
					update : '' ,
					delete : ''
				}
			}
		}
	}
</script>