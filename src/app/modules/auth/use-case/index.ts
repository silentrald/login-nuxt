import authApi from '../repo'
import makeAuthLoginUseCase from './login'
import makeAuthLogoutUseCase from './logout'


export const authLogin = makeAuthLoginUseCase(authApi)
export const authLogout = makeAuthLogoutUseCase(authApi)

export default Object.freeze({
  authLogin,
  authLogout,
})
