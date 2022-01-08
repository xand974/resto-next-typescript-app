import axios from "axios";

export const publicRequest = axios.create({
  baseURL: "http://localhost:3000/api",
});
