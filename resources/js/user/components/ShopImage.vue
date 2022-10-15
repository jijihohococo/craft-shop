<template>
	<router-link to="/">
		<v-lazy-image :src="showImage()" alt="logo"/>
	</router-link>
</template>
<script >
	import VLazyImage from "v-lazy-image"
	export default {
		components : {
			VLazyImage
		},
		props  : {
			pic : {
				type : String
			}
		},
		methods : {
			showImage(){
				return this.$props.pic=='logo_dark.png' ? 
				'/images/logo_dark.png' : 
				'/image/shop_images/'+this.$props.pic
			}
		}
	}
</script>