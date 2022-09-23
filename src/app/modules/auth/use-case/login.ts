import { AuthApi } from '../repo/types'


const makeAuthLoginUseCase = (authApi: AuthApi) => {
  return Object.freeze({
    execute: async (username: string, password: string): Promise<void> => {
      await authApi.login(username, password)
    },
  })
}

export default makeAuthLoginUseCase

