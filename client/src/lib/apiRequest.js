import axios from "axios";

const isRequest = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});
export default isRequest;
