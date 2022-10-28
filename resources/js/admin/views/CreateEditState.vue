<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/state' , 'title' : content }
	]"   />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updateState() : createState()">
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Country</label>
									<Select :value="fields.country_id" @input="setCountryId">
										<option value="" disabled >Select Country</option>
										<option v-for="country in countries" :value="country.id">{{ country.name }}</option>
									</Select>
									<strong v-if="errors && errors.country_id" class="invalid-feedback" style="display:block!important;">{{ errors.country_id[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
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

	import { errorResponse , checkContentPermission } from '../helpers/check';

	import { showSwalLoading } from  '../../helpers/general'

	import Select from '../components/Select'

	import { mixin } from '../common/'
	
	export default {
		components: {
			Select
		},
		mixins: [mixin],
		data(){
			return {
				content : 'State',
				countries : {},
				fields : {
					name : '',
					country_id : ''
				}
			}
		},
		async created(){
			this.current=isNaN(this.$route.params.id) ? 'create' : 'update';
			checkContentPermission(this.content,this.current,this);
			await this.getCountries()
			if(this.current=='update'){
				await this.getStateData(this.$route.params.id);
			}
		},
		methods : {
			setCountryId(countryId){
				this.fields.country_id=countryId
			},
			createState(){

				window.axios.post("states",this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal( 'Success' ,
							response.data.message ,
							'success'  );
						this.$router.push({path: '/admin/state' })
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'create')
					}
				} )
			},
			updateState(){
				window.axios.put(`states/${this.$route.params.id}`,this.fields).then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.$swal('Success',
							response.data.message,
							'success');
						this.$router.push({path:'/admin/state'})
					}
				} ).catch( (error) => {
					if(error.response.status==422){
						this.errors= error.response.data.errors
					}else{
						errorResponse(error,this,'update')
					}
				} )
			},
			async getStateData( stateId ){
				window.axios.get('states/'+stateId + '/edit' ).then((response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.fields=response.data.state;
					}
				} ).catch( (error) => {
					errorResponse(error,this,'update')
				} )
			},
			async getCountries(){
				window.axios.get('get_countries').then( (response) => {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.countries=response.data.countries
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')
				} )
			},
		}
	}
</script>