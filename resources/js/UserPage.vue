<template>
	<Navbar />
	<router-view />
</template>
<script >
	import Navbar from './user/components/Navbar';
	export default {
		components: {
			Navbar
		},
		
	}
</script>