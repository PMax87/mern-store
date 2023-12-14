import axios from "axios";
import { apiBaseUrl } from "../utils/costants/apiBaseUrl";

export const authApi = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

// authApi.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     const errorMessage = error.response.data.message as string;
//     if (errorMessage.includes("not logged in") && originalRequest._retry) {
//       originalRequest._retry = true;
//     }
//   }
// );

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token !== undefined || token !== null) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}),
  (error) => Promise.reject(error);
