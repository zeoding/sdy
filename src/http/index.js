import axios from "axios";
import config from "../config";

//配置请求信息
//axios.defaults.timeout = 5000;
axios.defaults.baseURL = config.BASE_URL;

export default axios;
