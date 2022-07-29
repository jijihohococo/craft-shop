<template>
	<PromotionBox />
	<router-view />
</template>
<script >
	import Navbar from './user/components/Navbar';
	import PromotionBox from './user/components/PromotionBox';
	export default {
		components: {
			Navbar,
			PromotionBox
		},
		
	}
</script>