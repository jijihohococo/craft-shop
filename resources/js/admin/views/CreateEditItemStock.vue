<template>
	<ContentHeader :header="header" 
	:back_links="[
	{ 'route' : '/admin/item' , 'title' : 'Item' },
	{ 'route' : '/admin/item/variant/'+itemVariant.id , 'title' : itemColor } ,
	{ 'route' : '/admin/item_stock/'+itemVariant.id , 'title' : stock }
	]" />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" enctype="multipart/form-data" @submit.prevent=" !isNaN(this.$route.params.id) ? updateItemStock() : createItemStock()" >
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Stock</label>
									<p>{{ itemVariant.stock ?? 0 }}</p>
								</div>
								<div class="form-group">
									<label>Quantity</label>
									<input type="text" :class="[errors && errors.qty ? 'form-control is-invalid' : 'form-control']" placeholder="Quantity" v-model="fields.qty">
									<strong v-if="errors && errors.qty" class="invalid-feedback">{{ errors.qty[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Available Stock</label>
									<input type="text" :class="[errors && errors.available_stock ? 'form-control is-invalid' : 'form-control']" placeholder="Available Stock" v-model="fields.available_stock">
									<strong v-if="errors && errors.available_stock" class="invalid-feedback">{{ errors.available_stock[0] }}</strong>
								</div>
							</div>
						</div>
					</div>
					<div class="card-footer">
						<button type="submit" class="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>
<script >
	import Error from '../components/Error'

	import Loading from '../components/Loading'

	import ContentHeader from '../components/ContentHeader'

	import { errorResponse , checkContentPermission , showSwalLoading , getItemColor } from '../helpers/check.js';

	export default {
		components: {
			ContentHeader,
			Error,
			Loading
		},
		data(){
			return {
				content : 'ItemStock',
				itemVariant : {},
				itemColor : null ,
				header : null ,
				stock : null ,
				fields : {
					qty : '',
					available_stock : ''
				},
				errors : {
					error_status : 0 ,
					error_title : '',
					error_description : ''
				},
				actions : {
					create : '',
					update : ''
				},
				current : null
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			if(this.current=='update'){
				await this.getItemStockData(this.$route.params.id);
			}else{
				await this.getItemVariant(this.$route.params.item_varaint_id)
			}
		},
		methods : {
			getContentStock(data){
				return data + "'s Stock"
			},
			createItemStock(){

			},
			async getItemVariant(itemVariantId){
				window.axios.get('item_variants/'+itemVariantId).then( (response) => {
					if(response.data.message=='Loading'){
						showSwalLoading(this);
					}else{
						this.itemVariant=response.data.item_variant
						this.itemColor=getItemColor(response.data)
						this.stock=this.itemColor + "'s Stock"
						this.header="Create "+this.stock
					}
				} )
			},
			async getItemStockData(itemStockId){
				window.axios.get('item_variant_stocks/'+itemStockId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.item_stock;
						this.itemVariant=response.data.item_variant
						this.itemColor=getItemColor(response.data)
						this.stock=this.itemColor + "'s Stock"
						this.header="Update "+this.stock
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>