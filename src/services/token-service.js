import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  getUserId() {
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split('.')[1]))
      } catch (e) {
        return null
      }
    }
    const user = parseJwt(window.localStorage[config.TOKEN_KEY])
    // console.log('USER', user)
    // console.log('ID#', user?.user_id)
    return user?.user_id
  },
}

export default TokenService
