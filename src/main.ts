import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./index.css";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


const pinia = createPinia();
createApp(App).use(router).use(pinia).use(VCalendar).mount("#app");
