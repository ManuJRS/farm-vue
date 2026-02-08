import axios from 'axios'

export const httpNav = axios.create({
  baseURL: import.meta.env.VITE_WP_BASE_NAV,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})
