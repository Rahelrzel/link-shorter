import axios from "axios"

const API_KEY=import.meta.env.VITE_API_KEY

 export const axiosClient=axios.create({
    headers:{
        Authorization:`Bearer ${API_KEY}`
    }
})