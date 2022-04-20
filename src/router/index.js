import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheLogin from "../views/TheLogin.vue";
import TheRegistration from "../views/TheRegistration.vue";
import TheRooms from "../views/TheRooms.vue";
import CheckIn from "../views/CheckIn.vue";
import TheChat from "../views/TheChat.vue";

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
  {
    path: "/checkin/:hostID/:roomID",
    name: "CheckIn",
    component: CheckIn,
  },
  {
    path: "/chat/:hostID/:roomID",
    name: "Chat",
    component: TheChat,
  },
  {
    path: "/:notFound(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
