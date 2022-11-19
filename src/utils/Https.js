import axios from "axios"

// ** for import config
import constantConfig from "@configs/constant"

export const axiosInstance = axios.create({
  baseURL: constantConfig.api.baseURL,
})

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosInstance
