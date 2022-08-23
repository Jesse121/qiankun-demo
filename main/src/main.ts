// import "@/permission";
import "@/styles/index.scss";
import "normalize.css/normalize.css";
import "element-plus/dist/index.css";

import ElementPlus from "element-plus";
import { createApp } from "vue";

import App from "./App.vue";
import SvgIcon from "./components/SvgIcon/index.vue";
import router from "./router";
import store from "./store";

const req = require.context("@/assets/icons", false, /\.svg$/);
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);
requireAll(req);

const app = createApp(App);

app.component("SvgIcon", SvgIcon);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount("#app");
