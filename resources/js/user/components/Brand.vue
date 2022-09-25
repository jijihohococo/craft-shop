<template>
	<div class="section small_pt">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="heading_tab_header">
						<div class="heading_s2">
							<h2>{{ translateLang('Brands') }}</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="client_logo carousel_slider owl-carousel owl-theme nav_style3" data-dots="false" data-nav="true" data-margin="30" data-loop="true" data-autoplay="true" data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}'>
						<div class="item" v-for="brand in brands">
							<div class="cl_logo">
								<img :src="'/image/brand_images/'+brand.pic" alt="cl_logo"/>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	<component is="script" src="user/js/scripts.js" />
</template>
<script >
	import { translate } from '../../helpers/general.js'
	export default {
		data(){
			return {
				brands : {}
			}
		},
		methods :{
			translateLang(data){
				return  translate(data);
			},
			async getBrands(){
				window.axios.get( 'brands' ).then(( response ) =>  {
					this.brands=response.data.brands
				} )
			}
		},
		async created(){
			await this.getBrands()
		}
	}
</script>