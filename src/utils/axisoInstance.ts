// Custom instance to ignore certificate problems in dev

import axios from "axios";
import https from "node:https";

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: process.env.NODE_ENV === "production", // Only ignore self-signed certs in dev
  }),
});

export default axiosInstance;
