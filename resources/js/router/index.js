import { createRouter , createWebHistory } from 'vue-router'

//------ADMIN ROUTES------//
import shopRoutes from './admin/shop';
import adminRoutes from './admin/admin';
import brandRoutes from './admin/brand';
import bannerRoutes from './admin/banner';
import dashboardRoutes from './admin/dashboard';
import attributeRoutes from './admin/attribute';
import itemRoutes from './admin/item';
import categoryRoutes from './admin/category';
import loginRoutes from './admin/login';
import notfoundRoutes from './admin/notfound';
import roleRoutes from './admin/role';
import permissionRoutes from './admin/permission';
import orderRoutes from './admin/order';
import targetRoutes from './admin/target';
import currencyRoutes from './admin/currency';
import itemStockRoutes from './admin/item_stock';
import transactionRoutes from './admin/transaction';
import taxRoutes from './admin/tax';
import colorRoutes from './admin/color';
import subcategoryRoutes from './admin/subcategory';
//------ADMIN ROUTES------//


//------User ROUTES------//
import pageRoutes from './user/page';
import usernotfoundRoutes from './user/usernotfound';
//------User ROUTES------//

const AdminPage = () => import('../AdminPage.vue');
const UserPage = () => import('../UserPage.vue');


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //mode : 'history',
  routes : [
  {
    path : '/',
    component : UserPage ,
    children : [
    ...pageRoutes,
    ...usernotfoundRoutes
    ]
  },
  {
    path : '/admin',
    component: AdminPage ,
    children: [
    ...loginRoutes,
    ...shopRoutes,
    ...adminRoutes,
    ...dashboardRoutes,
    ...bannerRoutes,
    ...brandRoutes,
    ...categoryRoutes,
    ...subcategoryRoutes,
    ...itemRoutes,
    ...attributeRoutes,
    ...notfoundRoutes,
    ...roleRoutes,
    ...permissionRoutes,
    ...orderRoutes,
    ...targetRoutes,
    ...currencyRoutes,
    ...itemStockRoutes,
    ...transactionRoutes,
    ...taxRoutes,
    ...colorRoutes
    ]
  }
  ]
});


// router.beforeEach((to,from,next) => {

//   if(to.matched.some(r => r.meta.requireAdmin) && getCookie('admin_auth')==null  ){
//     window.location.href='login'
//   }
//   next()
// });

export default router ;