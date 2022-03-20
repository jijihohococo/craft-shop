<template>
	<router-link class="btn btn-info btn-sm mr-3" :to="{name: link ,params:{id:dataId }}">
		<i class="fas fa-pencil-alt">
		</i>
		Edit
	</router-link>
</template>
<script >

	export default {
		props : {
			content : {
				type : String
			},
			link : {
				type : String
			},
			dataId : {
				type : Number
			}
		}

	}
</script>