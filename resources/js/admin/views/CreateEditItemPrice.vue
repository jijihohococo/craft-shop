<template>
	<ContentHeader :header="header" 
	:back_links="[
	{ 'route' : '/admin/item' , 'title' : 'Item' },
	{ 'route' : '/admin/item/variant/'+itemVariant.id , 'title' : itemColor } ,
	{ 'route' : '/admin/item/price/'+itemVariant.id , 'title' : price }
	]" />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" enctype="multipart/form-data" @submit.prevent=" !isNaN(this.$route.params.id) ? updateItemPrice() : createItemPrice()" >
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Currency</label>
									<Select :value="fields.currency_id" @input="setCurrencyId">
										<option value="" disabled >Select Currency</option>
										<option v-for="currency in currencies" :value="currency.id">{{ currency.name }}</option>
									</Select>
									<strong v-if="errors && errors.currency_id" class="invalid-feedback" style="display:block;">{{ errors.currency_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Price</label>
									<input type="text" :class="[errors && errors.price ? 'form-control is-invalid' : 'form-control']" placeholder="Rate" v-model="fields.price">
									<strong v-if="errors && errors.price" class="invalid-feedback">{{ errors.price[0] }}</strong>
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

	import { errorResponse , checkContentPermission , getItemColor } from '../helpers/check';

	import { showSwalLoading } from  '../../helpers/general'

	import { mixin } from '../common/'

	import Select from '../components/Select'

	export default {
		components : {
			Select
		},
		mixins: [mixin],
		data(){
			return {
				content : 'ItemPrice',
				itemVariant : {},
				itemColor : '' ,
				header : '' ,
				price : '' ,
				currencies : {},
				fields : {
					currency_id : '',
					price : ''
				}
			}
		},
		mounted(){
			if(this.current=='update'){
				this.getItemPriceData(this.$route.params.id);
			}else{
				this.getItemVariant(this.$route.params.item_varaint_id)
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			await this.getCurrencies()
		},
		methods : {
			setCurrencyId(currencyId){
				this.fields.currency_id=currencyId
			},
			getContentStock(data){
				return data + "'s Stock"
			},
			updateItemPrice(){
				window.axios.post('update_item_variant_prices/'+this.$route.params.id,this.fields).then( (response) => {
					if(response.data.message=='Loading'){
						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success')
						this.$router.push({path: '/admin/item/price/'+ this.itemVariant.id })
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			createItemPrice(){
				window.axios.post("save_item_variant_prices/"+this.itemVariant.id,this.fields ).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/item/price/'+ this.itemVariant.id })
					}
				}).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			getItemVariant(itemVariantId){
				window.axios.get('create_item_variant_prices/'+itemVariantId).then( (response) => {
					if(response.data.message=='Loading'){
						showSwalLoading(this);
					}else{
						
						this.itemVariant=response.data.item_variant
						this.itemColor=getItemColor(response.data)
						this.price=this.itemColor + "'s Price"
						this.header="Create "+this.price
					}
				} )
			},
			getItemPriceData(itemPriceId){
				 window.axios.get('item_variant_prices/'+itemPriceId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.item_price;
						this.itemVariant=response.data.item_variant
						this.itemColor=getItemColor(response.data)
						this.price=this.itemColor + "'s Price"
						this.header="Update "+this.price
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getCurrencies(){
				await window.axios.get('get_currencies').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.currencies=response.data.currencies
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			}
		}
	}
</script>