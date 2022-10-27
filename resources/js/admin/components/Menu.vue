<template>
	<!-- Main Sidebar Container -->
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
		<!-- Brand Logo -->
		<a href="index3.html" class="brand-link">
			<span class="brand-text font-weight-light">{{ shop.data.name }}</span>
		</a>

		<!-- Sidebar -->
		<div class="sidebar">
			<!-- Sidebar user panel (optional) -->
			<div class="user-panel mt-3 pb-3 mb-3 d-flex">
				<div class="image">
					<img :src="'/dist/img/user2-160x160.jpg'" class="img-circle elevation-2" alt="User Image">
				</div>
				<div class="info">
					<a href="#" class="d-block">{{ admin.data.name }}</a>
				</div>
			</div>

			<!-- Sidebar Menu -->
			<nav class="mt-2">
				<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
           <router-link to="/admin/dashboard" :class="[currentRoute=='dashboard' ? 'nav-link active' : 'nav-link']">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
             Dashboard
           </p>
         </router-link>
       </li>
          <!-- Add icons to the links using the .nav-icon class
          	with font-awesome or any other icon font library -->
          	<SubMenu :currentRoute="currentRoute"  :dataRoutes="dataRoutes" title="Data"  />

            <SubMenu :currentRoute="currentRoute"  :dataRoutes="countryAndStateRoutes" title="Countries And States"  />            

            <SubMenu :currentRoute="currentRoute" :dataRoutes="productRoutes" title="Product" />

            <SubMenu :currentRoute="currentRoute"  :dataRoutes="roleAndPermissionRoutes" title="Role And Permission"  />

            <SubMenu :currentRoute="currentRoute"  :dataRoutes="processRoutes" title="Process"  />

            <li class="nav-item">
             <a role="button" v-on:click="logout" class="nav-link">
              <i class="nav-icon fas fa-sign-out-alt"></i>
              <p>
               Logout
             </p>
           </a>
         </li>

       </ul>
     </nav>
   </div>
 </aside>
</template>
<script >
 import SubMenu from './SubMenu.vue';

 import { errorResponse } from '../helpers/check';

 import { showSwalLoading } from  '../../helpers/general'
 
 import { shop , admin } from '../../store';

 export default {
  components : {
   SubMenu
 },
 data(){
   return {
    shop,
    admin ,
    dataRoutes : {
      'shop' : "Shop",
      'social_media' : "Social Media",
      'admin' : "Admin",
      'user'  : "User",
      'attribute' : "Attribute",
      'category' : "Category" ,
      'subcategory' : "Subcategory",
      'brand' : "Brand" ,
      'color' : "Color",
      'tax' : "Tax",
      'target' : "Target",
      'currency' : "Currency"
    },
    countryAndStateRoutes : {
      'country' : "Country",
      'state'  : "State",
      'city' : "City"
    },
    productRoutes : {
      'item' : 'Item',
      'collection' : "Collection",
      'banner' : "Banner",
      'promotion' : "Promotion"
    },
    roleAndPermissionRoutes : {
      'role':"Role",
      'permission' : "Permission"
    },
    processRoutes : {
     'order' : "Order",
   }
 }
},
methods : {
  logout(){
    window.axios.post('logout').then( (response) => {
      if(response.data.message=='Loading'){
        showSwalLoading(this);
      }else{
        window.location.href="dashboard";
      }
    } ).catch( (error) => {
      errorResponse(error,this);
    } )
  },
  async getAdmin(){
   window.axios.get("admin").then(( response ) =>  {
    if(response.data.message=='Loading'){
      showSwalLoading(this);
    }else{
     this.admin.changeData(response.data.admin);
   }
 } ).catch( (error) => {
  errorResponse(error,this);
} )
}
},
async created(){
 await this.getAdmin();
},
computed : {
 checkValue : function() {
   return this.preference ? true : false
 },
 currentRoute: function () {
   return this.$route.name
 }
}
}
</script>