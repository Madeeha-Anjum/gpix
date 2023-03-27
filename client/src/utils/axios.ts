import axiosModule, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axiosModule.create({
  baseURL: 'http://localhost:3000/'
})

const axios: AxiosInstance = instance

export default axios
