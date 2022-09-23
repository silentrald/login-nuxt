import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { HttpError } from './error'
import { HttpServiceConfig, HttpService, HttpRequest, HttpResponse } from './types'

const handleError = (err: AxiosError) => {
  if (err.response) {
    throw new HttpError({
      status: err.response.status,
      message: err.message,
      errors: err.response.data || [],
    })
  }

  throw err
}

const makeHttpService = (config: HttpServiceConfig = {}): HttpService => {
  const axiosService = axios.create()

  const handleRequest = async (url: string, method: 'get' | 'post', req: HttpRequest = {}): Promise<HttpResponse> => {
    try {
      const res = await axiosService(url, {
        method,
        headers: {
          'Content-Type': req.contentType ? req.contentType.valueOf() : 'application/json',
        },
        data: req.body,
      })

      if (res.status > 399) {
        throw new HttpError({
          status: res.status,
          // TODO:
        })
      }

      return {
        body: res.data,
        status: res.status,
        contentType: res.headers['Content-Type'],
      }
    } catch (err) {
      // TODO: Network Error
      throw new HttpError({})
    }
  }

  if (config.baseUrl) {
    axiosService.defaults.baseURL = config.baseUrl
  }


  return Object.freeze({
    initService: () => {
      axiosService.interceptors.request.use(
        // TODO: Check here if the cookies are being sent
        (request: AxiosRequestConfig) => request,
        handleError
      )

      axiosService.interceptors.response.use(
        // TODO: Check if the cookies are being written
        (response: AxiosResponse) => response,
        handleError
      )
    },

    get: (url, req = {}) => handleRequest(url, 'get', req),
    post: (url, req = {}) => handleRequest(url, 'post', req),
  } as HttpService)
}

export default makeHttpService

