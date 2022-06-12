<template>
	<ContentHeader :header="content" />
	<section class="content">
		<div  class="card card-default">
			<Error :httpStatus="404" title="Page Not Found" description="The Page is not found" />
		</div>
	</section>
</template>
<script >

	import Error from '../components/Error';
	import ContentHeader from '../components/ContentHeader';

	export default {
		data(){
			return {
				content : '404 Page Not Found'
			}
		},
		components: {
			ContentHeader,
			Error
		}
	}
</script>