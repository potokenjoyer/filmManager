import { createRouter, createWebHashHistory } from "vue-router";
// import components here
import LoginPage from "./components/LoginPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "pageOne",
      component: LoginPage,
    },
  ],
});
