<template>
	<router-link class="btn btn-primary btn-sm mr-3" :to="{name: 'transaction' ,params:{
		name : data_name ,
		model : data_model ,
		model_id: data_id}
	}">
		<i class="fas fa-folder">
		</i>
		View
	</router-link>
</template>
<script >
	export default {
		props : {
			data_name : {
				type : String
			},
			data_model : {
				type : String
			},
			data_id : {
				type : Number
			}
		}
	}
</script>