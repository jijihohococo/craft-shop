<template>
	<ContentHeader 
	:header="isNaN(this.$route.params.id) ? 
	'Create '+content : 'Update '+content" 
	:back_links="[
	{ 'route' : '/admin/promotion' , 'title' : content }
	]"   />
	<Loading />
	<section class="content">
		<div class="container-fluid">
			<div class="card card-default">
				<Error v-if="actions[current]==false" :httpStatus="errors.error_status" :title="errors.error_title" :description="errors.error_description" />
				<form v-else-if="actions[current]" @submit.prevent=" !isNaN(this.$route.params.id) ? updatePromotion() : createPromotion()" >
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Name</label>
									<input type="text" :class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']" placeholder="Name" v-model="fields.name">
									<strong v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
								</div>
								<div class="form-group">
									<label>Promotion Date</label>
									<Datepicker v-model="date" range 
									:minDate="new Date()"
									:clearable="false" />
								</div>
								<div class="form-group">
									<label>Promo Code</label>
									<input type="text" :class="[errors && errors.promo_code ? 'form-control is-invalid' : 'form-control']" placeholder="Promo Code" v-model="fields.promo_code">
									<strong v-if="errors && errors.promo_code" class="invalid-feedback">{{ errors.promo_code[0] }}</strong>
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
	import Datepicker from '@vuepic/vue-datepicker';
	import '@vuepic/vue-datepicker/dist/main.css'

	import { ref, onMounted } from 'vue';

	import ContentHeader from '../components/ContentHeader';

	import { errorResponse , checkContentPermission , showSwalLoading , dateFormat } from '../helpers/check.js';

	import Error from '../components/Error'

	import Loading from '../components/Loading'

	export default {
		components: { 
			ContentHeader,
			Loading,
			Error,
			Datepicker
		},
		setup() {
			const date = ref();

        // For demo purposes assign range from the current date
        onMounted(() => {
        		const startDate = new Date();
        		const endDate = new Date(new Date().setDate(startDate.getDate() + 1));
        		date.value = [startDate, endDate];
        })
        
        return {
        	date,
        }
    },
    data() {
    	return {
    		content : 'Promotion',
    		fields : {
    			name : '',
    			banner_id : '',
    			promotion_start_time : null,
    			promotion_end_time : null ,
    			promo_code : ''
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
    		await this.getPromotionData(this.$route.params.id);
    	}
    },
    methods : {
    	setPromotionTime(){
    		this.fields.promotion_start_time=dateFormat(this.date[0])
    		this.fields.promotion_end_time=dateFormat(this.date[1])
    	},
    	createPromotion(){
    		this.setPromotionTime()
    		window.axios.post("promotions",this.fields).then( (response) => {
    			if(response.data.message=='Loading'){

    				showSwalLoading(this);
    			}else{
    				this.$swal( 'Success' ,
    					response.data.message ,
    					'success'  );
    				this.$router.push({path: '/admin/promotion' })
    			}
    		} ).catch( (error) => {
    			if(error.response.status==422){
    				this.errors= error.response.data.errors
    			}else{
    				errorResponse(error,this,'create')
    			}
    		} )
    	},
    	updatePromotion(){
    		this.setPromotionTime()
    		window.axios.put(`promotions/${this.$route.params.id}`,this.fields).then( (response) => {
    			if(response.data.message=='Loading'){

    				showSwalLoading(this);
    			}else{
    				this.$swal('Success',
    					response.data.message,
    					'success');
    				this.$router.push({path:'/admin/promotion'})
    			}
    		} ).catch( (error) => {
    			if(error.response.status==422){
    				this.errors= error.response.data.errors
    			}else{
    				errorResponse(error,this,'update')
    			}
    		} )
    	},
    	async getPromotionData(promotionId){
    		window.axios.get('promotions/'+promotionId + '/edit' ).then((response) => {
    			if(response.data.message=='Loading'){

    				showSwalLoading(this);
    			}else{
    				this.fields=response.data.promotion;
    				const startDate = new Date(response.data.promotion.promotion_start_time);
    				const endDate = new Date(response.data.promotion.promotion_end_time);
    				this.date= [startDate, endDate];
    			}
    		} ).catch( (error) => {
    			errorResponse(error,this,'update')
    		} )				
    	}
    }

}
</script>