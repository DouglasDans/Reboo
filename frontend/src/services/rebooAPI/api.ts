import axios, { AxiosResponse } from "axios"

const rebooAPI = axios.create({
  baseURL: process.env.REBOO_API_URL,
})

// Interceptores de requisição
rebooAPI.interceptors.request.use(
  config => {
    console.log(config.baseURL)
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
rebooAPI.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  error => {
    // Você pode tratar erros globais aqui
    return Promise.reject(error)
  },
)

export default rebooAPI
