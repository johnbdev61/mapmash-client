import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Hyph } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    // TokenService.clearCallbackBeforeExpiry() //TODO: Delete this maybe
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link onClick={this.handleLogoutClick} to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link to='/register'>Register</Link>
        <Hyph />
        <Link to='/login'>Log in</Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>Map Mash Client</Link>
        </h1>
        <p>
          This application is for gamers who want to show off their perfect
          button layouts (Mashes) for any game on Xbox. Map Mash is also the
          perfect fit for gamers who just want to explore other Mashes and learn
          what the best configurations are for the games they want to break
          into.
          <br />
          You may create new mashes for your favortie games, or you can search
          by game title for other user's Mashes. Log in or create an account to
          get started.
        </p>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}