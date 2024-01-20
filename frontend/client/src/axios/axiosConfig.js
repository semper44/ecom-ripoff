import axios from "axios"

const baseURL="http://127.0.0.1:8000/"


const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

const axiosInstance= axios.create({
    baseURL:baseURL,
    timeout:3000,
    headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ token.access
    },
})

export default axiosInstance