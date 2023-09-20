import axios from "axios";
import { BASE_URL } from "../constants/AppConstants";

export const publicRouter = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
