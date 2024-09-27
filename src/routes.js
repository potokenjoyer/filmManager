import { createRouter, createWebHashHistory } from "vue-router";
// import components here
import LoginPage from "./pages/LoginPage/LoginPage.vue";
import RegistrationForm from "./pages/LoginPage/components/RegistrationForm.vue";
import AuthForm from "./pages/LoginPage/components/AuthForm.vue";
import RecoveryForm from "./pages/LoginPage/components/RecoveryForm.vue";
import MainPage from "./pages/MainPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "auth",
      component: LoginPage,
      children: [
        {
          path: "/",
          component: AuthForm,
          name: "login",
        },
        {
          path: "/registration",
          component: RegistrationForm,
          name: "registration",
        },
        {
          path: "/recovery",
          component: RecoveryForm,
          name: "pass-recovery",
        },
      ],
    },
    {
      path: "/films",
      name: "films",
      component: MainPage,
    },
  ],
});
