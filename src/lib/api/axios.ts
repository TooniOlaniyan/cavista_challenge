import axios from "axios";


export const BASE_URL = "https://json-server-echb.onrender.com";

export const CavistaAPI = axios.create({
  baseURL: BASE_URL,
});


