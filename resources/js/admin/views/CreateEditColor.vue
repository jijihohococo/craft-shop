<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/color' , 'title' : content }
	]"   />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateColor() : createColor()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
								</div>
								<div class="form-group">
									<label>Color</label>
									<input type="color" :class="[errors && errors.color_code ? 'form-control form-control-color is-invalid' : 'form-control form-control-color' ]" v-model="fields.color_code">
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

	import ContentHeader from '../components/ContentHeader';

	import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

	import Error from '../components/Error'

	import Loading from '../components/Loading'
	
	export default {
		components: {
			ContentHeader,
			Error,
			Loading
		},
		data(){
			return {
				content : 'Color',
				fields : {
					name : '',
					color_code : '#000000'
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
			await	this.getColorData(this.$route.params.id);
			}
		},
		methods : {
			createColor(){
				window.axios.post("colors",this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/color' })
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateColor(){
				window.axios.put(`colors/${this.$route.params.id}`,this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/color'})
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getColorData( colorId ){
				window.axios.get('colors/'+colorId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.color;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			}
		}
	}
</script>