import { createRouter, createWebHashHistory } from "vue-router";
// import components here
import LoginPage from "./components/LoginPage.vue";
import RegistrationForm from "./components/formTabs/RegistrationForm.vue";
import AuthForm from "./components/formTabs/AuthForm.vue";
import CompleteRegForm from "./components/formTabs/CompleteRegForm.vue";
import RecoveryForm from "./components/formTabs/RecoveryForm.vue";
import CompleteRecoveryForm from "./components/formTabs/CompleteRecoveryForm.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "WelcomeForm",
      component: LoginPage,
      children: [
        {
          path: "/",
          component: AuthForm,
        },
        {
          path: "/registration",
          component: RegistrationForm,
        },
        {
          path: "/completereg",
          component: CompleteRegForm,
        },
        {
          path: "/recovery",
          component: RecoveryForm,
        },
        {
          path: "/completerecovery",
          component: CompleteRecoveryForm,
        },
      ],
    },
  ],
});
