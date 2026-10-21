import axios from "axios";

const API = "http://localhost:3000/api";

export const registerRequest = (user) => axios.post(`${API}/register`, user);
export const loginRequest = (credentials) =>
  axios.post(`${API}/login`, credentials);
