import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const googleBooksApi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
})

// Interceptores de requisição
// googleBooksApi.interceptors.request.use(
//   (config) => {
//     key: process.env.BOOKS_API
//     // Você pode adicionar headers aqui, por exemplo, token de autenticação
//     // const token = localStorage.getItem('token');
//     // if (token) {
//     //   config.headers.Authorization = `Bearer ${token}`;
//     // }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// Interceptores de resposta
googleBooksApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  error => {
    // Você pode tratar erros globais aqui
    return Promise.reject(error)
  },
)

export default googleBooksApi
