import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_WP_BASE_URL,
  timeout: 15000,
})
