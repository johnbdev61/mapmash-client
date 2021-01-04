import config from '../config'
import TokenService from './token-service'

const MashApiService = {
  getMashes() {
    return fetch(`${config.API_ENDPOINT}/mashes`, {
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
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
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
  addVote({ isUpvote, mashId }) {
    return fetch(`${config.API_ENDPOINT}/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        is_upvote: isUpvote,
        mashes_id: mashId,
        users_id: TokenService.getUserId(),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('ALL BINDS', result)
      })
  },
}

export default MashApiService
