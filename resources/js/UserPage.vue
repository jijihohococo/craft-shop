<template>
	<PromotionBox />
	<Header />
	<router-view />
	<Footer />
</template>
<script >
	import PromotionBox from './user/components/PromotionBox';
	import Header from './user/components/Header';
	import Footer from './user/components/Footer';
	export default {
		components: {
			PromotionBox,
			Header,
			Footer
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