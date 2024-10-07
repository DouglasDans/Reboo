import axios, { AxiosError, AxiosResponse } from "axios"
import { cookies } from "next/headers"

const api = axios.create({
  baseURL: process.env.REBOO_API_URL,
})

// Interceptores de requisição
api.interceptors.request.use(
  async config => {
    const cookie_token = await cookies().get("access_token")

    if (cookie_token) {
      config.headers.Authorization = `Bearer ${cookie_token.value}`
    }

    return config
  },
  error => {
    return Promise.reject(error.response.data)
  },
)

// Interceptores de resposta
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    // Você pode tratar erros globais aqui
    return Promise.reject(error.response?.data)
  },
)

export default api
