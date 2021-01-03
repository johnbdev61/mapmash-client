import config from '../config'
import TokenService from './token-service'

const MashApiService = {
  getMashes(userId) {
    return fetch(`${config.API_ENDPOINT}/mashes?user_id=${userId}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  getMash(mashId) {
    return fetch(`${config.API_ENDPOINT}/mashes/${mashId}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  deleteMash(mashId) {
    return fetch(`${config.API_ENDPOINT}/mashes/${mashId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
  },
  addVote(mashId) {
    return fetch(`${config.API_ENDPOINT}/mashes/${mashId}`)
  }
}

export default MashApiService
