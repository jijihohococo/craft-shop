<template>
	<ContentHeader :header="itemColor" 
	:back_links="[
	{ 'route' : '/admin/item' , 'title' : 'Item' }
	]"  />
	<section class="content">
		<div class="container-fluid">
			<!-- Small boxes (Stat box) -->
			<div class="row">
				<ImageUpload />
				<ContentButton
				boxClass="bg-info"
				content="Stock"
				subContent="Input"
				ionClass="ion-briefcase"
				@clickData="goToItemStock()"
				/>
				<ContentButton
				boxClass="bg-success"
				content="Price"
				subContent="Input"
				ionClass="ion-cash"
				@clickData="goToItemPrice()"
				/>
			</div>
		</div>
	</section>
</template>
<script >
	
	//import File from '../components/File'
	import ImageUpload from '../components/ImageUpload'
	import ContentHeader from '../components/ContentHeader'
	import ContentButton from '../components/ContentButton'
	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	export default {
		components: {
			ImageUpload,
			ContentHeader,
			ContentButton
		},
		data(){
			return {
				itemColor : null
			}
		},
		async created(){
			await this.getItemWithColor();
		},
		methods : {
			goToItemStock(){
				this.$router.push({path: '/admin/item/stock/'+this.$route.params.id })
			},
			goToItemPrice(){
				this.$router.push({path: '/admin/item/price/'+this.$route.params.id })
			},
			async getItemWithColor(){
				window.axios.get('item_variants/'+this.$route.params.id).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.itemColor=response.data.item_variant.item_name + "'s " + response.data.item_variant.color_name;
					}
				} )
			}
		}
	}
</script>