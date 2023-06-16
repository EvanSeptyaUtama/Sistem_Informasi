import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'

AOS.init();
createApp(App)
    .use(store)
    .use(router)
    .use(vueAwesomeSidebar)
    .mount('#app')
