import axios from "axios";

import store from "../store";
import {Params} from "../utils/constant";

const instance = axios.create({
  // baseURL: `${Params[mode].baseUrl}/`,
  timeout: 15000,
  headers: { "content-type": "application/json" },
});

instance.interceptors.request.use(function (config) {

  const state = store.getState();
  const mode = state.network ;

  console.log(state)

  config.baseURL =`${Params[mode].baseUrl}/`;
  const token = "e2c5717a142f58c05bdb8d9ce68794ee8b74c12267859dd185de1491f7d6780a";
  config.headers['Authorization'] = `Bearer ${token}`;



  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * get
 * @method get
 * @param {url, params, loading}
 */
const get = function (url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
/**
 * post
 * @method post
 * @param {url, params}
 */
const post = function (url, data) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * put
 * @method put
 * @param {url, params}
 */
const put = function (url, data) {
  return new Promise((resolve, reject) => {
    instance
      .put(url, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const rdelete = function (url, params) {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { get, post, put, delete: rdelete };
