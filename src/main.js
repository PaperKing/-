import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import {Button,Container,Aside,Header,Main,Image} from "element-ui";

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.component(Button.name,Button);
Vue.component(Container.name,Container);
Vue.component(Aside.name,Aside);
Vue.component(Header.name,Header);
Vue.component(Main.name,Main);
Vue.component(Image.name,Image)


new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')
