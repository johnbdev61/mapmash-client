import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Hyph } from '../../Utils/Utils'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  renderLogoutLink() {
    return (
      <div className='header-logged-in'>
        <Link
          className='login-logout'
          onClick={this.props.handleLogoutClick}
          to='/'
        >
          Log Out
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='header-logged-in'>
        <Link className='login-logout' to='/register'>
          Register
        </Link>
        <Hyph />
        <Link className='login-logout' to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <section className='header'>
        <h1 className='welcome'>Welcome to Map Mash</h1>
        <p className='description'>
          This application is for gamers who want to show off their perfect
          button layouts (Mashes) for any game on Xbox. Map Mash is also the
          perfect fit for gamers who just want to explore other Mashes and learn
          what the best configurations are for the games they want to break
          into.
        </p>  
        <p className='description'>            
          You may create new mashes for your favorite games, or you can search
          by game title for other user's Mashes. Log in or create an account to
          get started.
        </p>
        <h3 className='instructions-header'>Demo User Instructions</h3>
        <p className='demo-user description'>Demo Username: kind-grader</p>
        <p className='demo-user description'>Demo Password: &Passkey123</p>
        <p className='description'>There are 4 users including the demo user. Each user has a mash for the game 'Halo 3'. You will see that mash on your homepage and you will see all four mashes when you search the title 'Halo 3'. Click Create Mash to make a new mash. Only the game title is required for submission.</p>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </section>
    )
  }
}
