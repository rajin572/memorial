import axios from "axios";
import Cookies from "universal-cookie";
import { getBaseUrl } from "../config/envConfig";
const cookie = new Cookies();

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    Authorization: cookie.get("accessToken"),
  },
});

export { instance };
