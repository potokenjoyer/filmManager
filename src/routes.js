import { createRouter, createWebHashHistory } from "vue-router";
// import components here
import PageMain from "./components/MainPage.vue";


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "pageOne",
      component: PageMain
    },
  ],
});
