import axios from "axios";

const instance = axios.create({
  baseURL: "http://35.154.252.162:5000",
});

export default instance;
