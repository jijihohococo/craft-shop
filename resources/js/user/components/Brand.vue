<template>
	<div class="product-carousel" id="module-0-carousel" v-for="brand in brands">
		<div class="slider-item">
			<div class="product-block">
				<div class="product-block-inner">
					<img :src="'image/brand_images/'+brand.pic" class="img-responsive" :alt="brand.name" />
				</div>
			</div>
		</div>
	</div>
</template>
<script >
	export default {
		data(){
			return {
				brands : {}
			}
		},
		methods :{
			getBrands(){
				window.axios.get( 'get_brands' ).then(( response ) =>  {
					this.brands=response.data.brands
				} )
			}
		},
		created(){
			this.getBrands()
		}
	}
</script>