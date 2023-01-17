<template>
	<router-link class="btn btn-success btn-sm mr-3" :to="{name: 'seo.edit' ,params:{ model: content ,
	model_id: content_id }}">
		<i class="fas fa-pencil-alt">
		</i>
		Edit Seo
	</router-link>
</template>
<script >
	export default {
		props : {
			content : {
				type : String,
			},
			content_id : {
				type : Number
			}
		}

	}
</script>