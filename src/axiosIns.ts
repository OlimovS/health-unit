import { API_BASE_HOST } from "./constants/api";
import axios from "axios";

const getToken = () => {
  return localStorage.getItem("token") || "";
};

const axiosIns = axios.create({
  baseURL: API_BASE_HOST,
  headers: {
    "Content-Type": "application/json",
    "Acess-Control-Allow-Origin": "*",
    Authorization: `Bearer ${getToken()}`,
    Accept: "application/json",
  },
});

axiosIns.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status == 401) {
      // TODO: token is false
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosIns;
