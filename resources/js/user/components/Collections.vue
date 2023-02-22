<template>
	<!-- START SECTION BANNER --> 
	<div class="section pb_20 small_pt">
		<div class="container">
			<div class="row">
				<div class="col-md-6" v-for="collection in collections" >
					<div class="single_banner">
						<Image 
							path="/image/collection_images"
							:pic="collection.pic"
							:alt_name="collection.name" />
						<div class="single_banner_info">
							<h3 class="single_bn_title">{{ collection.name }}</h3>
							<router-link :to="'/shop/collection/'+collection.link" 
							class="single_bn_link">Shop Now</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END SECTION BANNER -->
</template>
<script >
	import Image from '../../components/Image';
	export default {
		components : {
			Image
		},
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