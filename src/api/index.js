import axios from "axios";

const api = axios.create({
    baseURL: "https://xedike-123.herokuapp.com/api"
    // baseURL: "http://localhost:4000/api"
})

export default api;