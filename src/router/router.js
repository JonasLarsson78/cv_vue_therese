import Vue from "vue";
import Router from "vue-router";
import Cv from "../page/cvContainer";
import CvLite from "../page/cvLite";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Cv",
      component: Cv,
    },
    {
      path: "/cvlite",
      name: "CvLite",
      component: CvLite,
    },
  ],
});
