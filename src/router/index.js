import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);
export function createRouter() {
  let router = new Router({
    routes: [
      {
        path: "/",
        name: "Hello",
        component: HelloWorld
      }
    ]
  });
  return router;
}
