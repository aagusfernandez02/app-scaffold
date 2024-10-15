import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // MDI icons
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const vuetiyf = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    }
});

// Router
import router from './router';


const app = createApp(App);
app.use(vuetiyf);
app.use(router);
app.mount('#app');
