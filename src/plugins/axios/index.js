import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";

// import { Message } from "element-ui";

const itillectURL = "https://itillect.ru/bcard-ajax";

const $api = axios.create({
  baseURL: itillectURL,
  withCredentials: false,
});

// $api.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

Vue.use(VueAxios, { $api });
