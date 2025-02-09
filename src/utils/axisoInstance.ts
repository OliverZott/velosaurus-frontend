// Custom instance to ignore certificate problems in dev

import axios from 'axios';
import https from 'https';

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Ignore self-signed certificate
    }),
});

export default axiosInstance;