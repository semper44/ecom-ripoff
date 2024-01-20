import axios from "axios"

const baseURL="http://127.0.0.1:8000/"


const token= JSON.parse(localStorage.getItem("authToken"))|| null
// console.log(token)
const axiosInstance= axios.create({
    baseURL:baseURL,
    timeout:3000,
    headers:{
        "Authorization": 'Bearer '+(token?.access),
        'Content-Type':'application/json',
        // accept:"application/json"
    },
})

export default axiosInstance