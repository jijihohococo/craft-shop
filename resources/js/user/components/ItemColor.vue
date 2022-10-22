<template>
	<div class="pr_switch_wrap">
		<div class="product_color_switch">
			<span @click="changeColor(key,color)" v-for="(color,key) in colors" :class="[ key==active ? 'active' :'']" :style="['background-color:'+ color ]"></span>
		</div>
	</div>
</template>
<script >
	export default {
		data(){
			return {
				active : 0
			}
		},
		props : {
			colors : {
				type : Array
			}
		},
		methods : {
			changeColor(key){
				this.active=key
				this.$emit('getData',key)
			}
		}
	}
</script>