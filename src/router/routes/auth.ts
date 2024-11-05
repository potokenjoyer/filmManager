import AuthForm from "@/pages/LoginPage/components/AuthForm.vue";
import RecoveryForm from "@/pages/LoginPage/components/RecoveryForm.vue";
import RegistrationForm from "@/pages/LoginPage/components/RegistrationForm.vue";
import LoginPage from "@/pages/LoginPage/LoginPage.vue";
import { AppRouteRecord } from "../types";

export const authRoutes = [
  {
    path: "/",
    name: "auth",
    redirect: {
      name: "login",
    },
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
] as const satisfies readonly AppRouteRecord[];
