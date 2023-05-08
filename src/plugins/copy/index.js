import Vue from "vue";

const copy = {
  install(Vue) {
    Vue.prototype.$copy = function (message = "", notification = true) {
      notification && this.$message("Скопировано");
      navigator.clipboard.writeText(message);
    };
  },
};

Vue.use(copy);
