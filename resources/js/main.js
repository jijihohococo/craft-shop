require('./bootstrap');

import { createApp } from 'vue'
import vuetify from 'vuetify'
import router from './router'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};



const app=createApp(App);
//app.use(Vuetify);
app.use(router);
app.use(VueSweetalert2);

app.mount('#app');

//new Vue({router}).$mount('#app')

