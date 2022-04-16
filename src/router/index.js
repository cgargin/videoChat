import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheLogin from "../views/TheLogin.vue";
import TheRegistration from "../views/TheRegistration.vue";
import TheRooms from "../views/TheRooms.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: TheLogin,
  },
  {
    path: "/register",
    name: "Register",
    component: TheRegistration,
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: TheRooms,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
