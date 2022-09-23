import makeUser from '../entity'
import { User } from '../entity/types'
import { AuthApi } from './types'
import { HttpService } from '~/app/shared/http/types'

const makeAuthApi = (service: HttpService) => {
  service.initService()

  return Object.freeze({
    login: async (username, password) => {
      await service.post('/auth/login', {
        body: {
          username,
          password,
        },
      })
    },

    logout: async () => {
      await service.post('/auth/logout')
    },

    getUser: async () => {
      const res = await service.get('/user')
      return makeUser(res.body as User)
    },

    // register: () => {

    // },
  } as AuthApi)
}

export default makeAuthApi

