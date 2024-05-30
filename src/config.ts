import axios from "axios"

const API_KEY=import.meta.env.VITE_API_KEY

 export const axiosClient=axios.create({
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
})