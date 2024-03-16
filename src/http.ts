import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const http = axios.create({
    baseURL: `${baseURL}`,
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

// interceptor will be used to add authoization header to the request
// http.interceptors.request.use(function () {

// });

export default http;