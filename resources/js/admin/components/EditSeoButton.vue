<template>
	<router-link class="btn btn-success btn-sm mr-3" :to="{name: 'seo.edit' ,params:{id:dataId }}">
		<i class="fas fa-pencil-alt">
		</i>
		Edit Seo
	</router-link>
</template>
<script >
	export default {
		props : {
			dataId : {
				type : Number,
				required : false
			}
		}

	}
</script>