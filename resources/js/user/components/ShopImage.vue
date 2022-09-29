<template>
	<router-link to="/">
		<img :src="[ pic=='logo_dark.png' ? '/images/logo_dark.png' : '/image/shop_images/'+pic]" alt="logo"/>
	</router-link>
</template>
<script >
	export default {
		props  : ['pic']
	}
</script>