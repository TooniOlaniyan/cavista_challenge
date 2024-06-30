import axios from "axios";

export const BASE_URL = "https://json-server-echb.onrender.com";


// export const BASE_URL = 'http://localhost:3000'
// fall back to localhost when base_url hosted server stops {to start local json server, run npx json-server sample.json}

export const CavistaAPI = axios.create({
  baseURL: BASE_URL,
});
