<template>
	<!-- Main Sidebar Container -->
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
		<!-- Brand Logo -->
		<a href="index3.html" class="brand-link">
			<img :src="'/dist/img/AdminLTELogo.png'" alt="" class="brand-image img-circle elevation-3" style="opacity: .8">
			<span class="brand-text font-weight-light">Craft Shop</span>
		</a>

		<!-- Sidebar -->
		<div class="sidebar">
			<!-- Sidebar user panel (optional) -->
			<div class="user-panel mt-3 pb-3 mb-3 d-flex">
				<div class="image">
					<img :src="'/dist/img/user2-160x160.jpg'" class="img-circle elevation-2" alt="User Image">
				</div>
				<div class="info">
					<a href="#" class="d-block">{{ admin.name }}</a>
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
          	<SubMenu :currentRoute="currentRoute"  :dataRoutes="dataRoutes" :title="'Data'"  />

            <SubMenu :currentRoute="currentRoute"  :dataRoutes="roleAndPermissionRoutes" :title="'Role And Permission'"  />

            <SubMenu :currentRoute="currentRoute"  :dataRoutes="processRoutes" :title="'Process'"  />

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

 import { errorResponse , showSwalLoading } from '../helpers/check.js';

 export default {
  components : {
   SubMenu
 },
 data(){
   return {
     admin : {},
     dataRoutes : {
      'admin' : "Admin",
      'attribute' : "Attribute",
      'tax' : "Tax",
      'item' : "Item" ,
      'category' : "Category" ,
      'color' : "Color",
      'banner' : "Banner",
      'target' : "Target",
      'currency' : "Currency"
    },
    roleAndPermissionRoutes : {
      'role':"Role",
      'permission' : "Permission"
    },
    processRoutes : {
     'item_stock' : "Item Stock",
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
  getAdmin(){
   window.axios.get("admin").then(( response ) =>  {
    if(response.data.message=='Loading'){
      showSwalLoading(this);
    }else{
     this.admin=response.data.admin
   }
 } ).catch( (error) => {
  errorResponse(error,this);
} )
}
},
created(){
 this.getAdmin();
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