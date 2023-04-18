import Vue from "vue";
Vue.directive("copy", {
  bind: function (el, binding) {
    console.log(binding.value);
    // const message = el.previousElementSibling.innerText;

    // navigator.clipboard.writeText(message);
  },
});
