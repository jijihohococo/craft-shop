<template>
	<ContentHeader :header="content" />
	<!-- Main content -->
	<section class="content">
		<div class="container-fluid">
			<!-- Small boxes (Stat box) -->
			<div class="row">
				<ContentButton
				boxClass="bg-info"
				:content="todayTotalOrders"
				subContent="Today Orders"
				ionClass="ion-bag"
				@clickData="goToOrder()"
				/>
				<ContentButton
				boxClass="bg-warning"
				:content="totalUsers"
				subContent="User Registrations"
				ionClass="ion-person-add"
				@clickData="goToUser()"
				/>
				<ContentButton
				boxClass="bg-success"
				:content="totalItems"
				subContent="Available Items"
				ionClass="ion-briefcase"
				@clickData="goToItem()"
				/>
			</div>
			<div class="row">
				<!-- right col (We are only adding the ID to make the widgets sortable)-->
				<section class="col-lg-5 connectedSortable">
					<!-- Calendar -->
					<CalendarCard />
					<!-- /.card -->
				</section>
				<!-- right col -->
			</div>
		</div>
	</section>
</template>
<script >
	import ContentHeader from '../components/ContentHeader';

	import ContentButton from '../components/ContentButton';

	import CalendarCard from '../components/CalendarCard';

	import { errorResponse } from '../helpers/check.js';

	import { showSwalLoading } from  '../../helpers/general'
	
	export default {
		components: {
			ContentHeader,
			ContentButton,
			CalendarCard
		},
		data(){
			return {
				content : 'Dashboard',
				totalUsers : '0' ,
				totalItems : '0' ,
				todayTotalOrders : '0'
			}
		},
		methods : {
			goToOrder(){
				this.$router.push({path: '/admin/order' })
			},
			goToUser(){
				this.$router.push({path:'/admin/user'})
			},
			goToItem(){
				this.$router.push({path:'/admin/item'})
			},
			async getTotalUsers(){
				window.axios.get("total_users").then(( response ) =>  {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.totalUsers=response.data.total_users.toString()
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')				
				} )
			},
			async getTotalItems(){
				window.axios.get("total_items").then(( response ) =>  {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.totalItems=response.data.total_items.toString()
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')				
				} )
			},
			async getTodayTotalOrders(){
				window.axios.get("today_total_orders").then(( response ) =>  {
					if(response.data.message=='Loading'){

						showSwalLoading(this);
					}else{
						this.todayTotalOrders=response.data.today_total_orders.toString()
					}
				} ).catch( (error) => {
					errorResponse(error,this,'read')				
				} )
			},
		},
		async created(){
			await this.getTotalUsers()
			await this.getTotalItems()
			await this.getTodayTotalOrders()
		}
	}
</script>