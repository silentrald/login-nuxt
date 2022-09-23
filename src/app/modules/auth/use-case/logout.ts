import { AuthApi } from '../repo/types'


const makeAuthLogoutUseCase = (authApi: AuthApi) => {
  return Object.freeze({
    execute: async (): Promise<void> => {
      await authApi.logout()
    },
  })
}

export default makeAuthLogoutUseCase

