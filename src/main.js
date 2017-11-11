// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import cube from 'cube-ui';
import App from "./App";
import { createRouter } from "./router";
import api from "./api";
import http from "./http";

Vue.use(cube);
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$axios = http;

/* eslint-disable no-new */
function createApp() {
  let router = createRouter();
  let app = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
  });
  return { app, router };
}
createApp();
