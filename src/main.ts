import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";
import globalComponents from "./plugins/global-components";
import focus from "./directives/focus";
import globalDirectives from "./plugins/global-directives";

const app = createApp(App);
// app.use(globalComponents);
// app.directive("focus", focus);
app.use(globalDirectives);
app.use(router);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";

// console.log('MODE', import.meta.env.MODE);
// console.log('BASE_URL', import.meta.env.BASE_URL);
// console.log('PROD', import.meta.env.PROD);
// console.log('DEV', import.meta.env.DEV);
// console.log('VITE_APP_API_URL', import.meta.env.VITE_APP_API_URL);
