import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import {Button,Container,Aside,Header,Main,Image,Card,Tabs,TabPane,Table,TableColumn,Switch,Dialog,Input} from "element-ui";

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.component(Button.name,Button);
Vue.component(Container.name,Container);
Vue.component(Aside.name,Aside);
Vue.component(Header.name,Header);
Vue.component(Main.name,Main);
Vue.component(Image.name,Image);
Vue.component(Card.name,Card);
Vue.component(Tabs.name,Tabs);
Vue.component(TabPane.name,TabPane);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Switch.name,Switch);
Vue.component(Dialog.name,Dialog);
Vue.component(Input.name,Input);


new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')
