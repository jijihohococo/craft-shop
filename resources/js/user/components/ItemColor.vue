<template>
	<div class="pr_switch_wrap">
			<div class="product_color_switch">
				<span v-for="(color,key) in colors" :class="[ key==0 ? 'active':'']" :style="['background-color:'+ color ]"></span>
			</div>
		</div>
</template>
<script >
	export default {
		props : ['colors']
	}
</script>