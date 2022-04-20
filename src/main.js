import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import webRTC from "vue-webrtc";
import * as io from "socket.io-client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faVideo,
  faUser,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faVideo, faUser, faPodcast);

window.io = io;

//Vue.config.productionTip = false;
Vue.use(webRTC);

const app = createApp(App);
app.use(router);
app.mount("#app");
