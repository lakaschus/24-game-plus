import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/lara-light-pink/theme.css'
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app')
