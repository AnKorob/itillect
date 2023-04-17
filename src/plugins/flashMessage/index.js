import Vue from "vue";

const flashMessage = {
  install(Vue) {
    Vue.prototype.$flashMessage = function (title = "", url = "") {
      console.log("flash message", title, url);
    };
  },
};

Vue.use(flashMessage);
