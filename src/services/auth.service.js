import axios from "axios";
import { API_USERS_URI } from "utils/constants";

export const login = (data) =>
  axios.post(`${API_USERS_URI}/api/v1/auth/login`, data);
