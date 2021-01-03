import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  state = { redirectUrl: '' }
  render() {
    if (this.state.redirectUrl) {
      return <Redirect to={this.state.redirectUrl} />
    }
    return (
      <>
        <Link to='home'>
          <h1 className='header'>Map Mash</h1>
        </Link>
        <section className='nav-bar'>
          <Link to='/mash-form'>Create New Mash</Link>
          <br />
          <input
            type='text'
            placeholder='Enter Game Title'
            onChange={this.props.handleInputChange}
          />
          <button
            className='search-game'
            onClick={() => {
              let redirectUrl = this.props.handleSubmit(this.props.history)
              this.setState({ redirectUrl })
            }}
          >
            Search
          </button>
          <br />
          <Link onClick={this.props.handleLogoutClick} to='/'>
            Log Out
          </Link>
        </section>
      </>
    )
  }
}
