import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    Appid: "78AZLZYO9PJVYHQ",
    Apikey: "5c10690e33b7445894b656e29f6fef8c20240712182542337119",
  },
});

export default axiosInstance;  