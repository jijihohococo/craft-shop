<template>
	<!-- START SECTION BANNER --> 
	<div class="section pb_20 small_pt">
		<div class="container">
			<div class="row">
				<div class="col-md-6" v-for="collection in collections" >
					<div class="single_banner">
						<img :src="'/image/collection_images/'+collection.pic">
						<div class="single_banner_info">
							<h3 class="single_bn_title">{{ collection.name }}</h3>
							<a href="shop-left-sidebar.html" class="single_bn_link">Shop Now</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END SECTION BANNER -->
</template>
<script >
	export default {
		data(){
			return {
				collections : {}
			}
		},
		async created(){
			await this.getCollections()
		},
		methods : {
			async getCollections(){
				window.axios.get('collections').then( (response) => {
					this.collections=response.data.collections
				} )
			}
		}
	}
</script>