import axios from "axios";

const ApiProducts = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"           
})

export default ApiProducts


