<template>
	<p>{{ error }} Page Not Found!</p>
</template>
<script >
	export default {
		data(){
			return {
				error : window.error_code ?? 404
			}
		}
	}
</script>