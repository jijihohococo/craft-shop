<template>
	<PromotionBox />
	<Header />
	<router-view />
</template>
<script >
	import PromotionBox from './user/components/PromotionBox';
	import Header from './user/components/Header';
	export default {
		components: {
			PromotionBox,
			Header
		},
		// mounted() {
		// 	const plugin = document.createElement("script");
		// 	plugin.setAttribute(
		// 		"src",
		// 		"/user/js/scripts.js"
		// 		);
		// 	plugin.async = true;
		// 	document.head.appendChild(plugin);
		// }
		
	}
</script>