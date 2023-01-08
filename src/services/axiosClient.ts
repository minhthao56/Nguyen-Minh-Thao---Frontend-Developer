import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost.com:3002",
  headers: {
    "content-type": "application/json",
  },
  params: {
    language: "en-US",
  },
});
axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (err) => {
    throw err;
  }
);
export default axiosClient;
