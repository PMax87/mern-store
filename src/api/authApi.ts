import axios, { AxiosError } from "axios";
import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import { useNavigate } from "react-router-dom";

export const authApi = axios.create({
  baseURL: apiBaseUrl,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token !== undefined || token !== null) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    const navigate = useNavigate();
    navigate("/");
  }
  return config;
}),
  (error: AxiosError) => Promise.reject(error);
