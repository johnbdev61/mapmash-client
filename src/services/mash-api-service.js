import config from '../config'
import TokenService from './token-service'

const MashApiService = {
  getMashes() {
    return fetch(`${config.API_ENDPOINT}/mashes`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  getMash(mashId) {
    return fetch(`${config.API_ENDPOINT}/mashes/${mashId}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
}

export default MashApiService
