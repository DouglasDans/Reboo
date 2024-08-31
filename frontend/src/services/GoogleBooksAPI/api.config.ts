import axios, { AxiosResponse } from "axios"

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
  params: {
    key: process.env.GOOGLE_API_KEY,
  },
})

api.interceptors.request.use(
  config => {
    // Você pode adicionar headers aqui, por exemplo, token de autenticação
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// Interceptores de resposta
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  error => {
    // Você pode tratar erros globais aqui
    return Promise.reject(error)
  },
)

export default api
