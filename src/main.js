import { createApp } from "vue";
import router from "./router";
import { Quasar } from "quasar";
import axios from "axios";
import VueAxios from "vue-axios";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";
import { createWebHistory } from "vue-router";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.use(router);

myApp.use(VueAxios, axios);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
