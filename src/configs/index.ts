import axios from "axios";

const CONFIGS = {
  port: import.meta.env.VITE_PORT,
  api: import.meta.env.VITE_API,
};

export const api = axios.create({
  baseURL: CONFIGS.api,
});