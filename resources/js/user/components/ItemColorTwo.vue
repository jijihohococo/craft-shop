<template>
	<div class="pr_switch_wrap">
		<span class="switch_lable">Color</span>
		<div class="product_color_switch">
			<span @click="changeColor(key,color)" v-for="(variant,key) in variants" :class="[ key==active ? 'active' :'']"
			:style="['background-color:'+ variant.color.color_code ]"></span>
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
			variants : {
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