import React, { Component } from 'react'
import config from '../../config'

export default class App extends Component {
  state = {
    mashes: [],
    binds: [],
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/mashes`),
      fetch(`${config.API_ENDPOINT}/binds`)
    ])
      .then(([mashesRes, bindsRes]) => {
        if (!mashesRes.ok)
          return mashesRes.json().then((event) => Promise.reject(event))
        if (!bindsRes.ok)
          return bindsRes.json().then((event) => Promise.reject(event))
      })
      .then(([mashes, binds]) => {
        this.setState({ mashes, binds })
      })
      .catch((error) => {
        console.error({ error })
      })
  }

  render() {
    return (
      <div>
        <h1>Hello! This is Map Mash</h1>
      </div>
    )
  }
}
