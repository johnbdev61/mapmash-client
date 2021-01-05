import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <>
        <section className='nav-bar'>
          <Link className='home-link' to='/home'>
            <h1 className='site-logo'>Map Mash</h1>
          </Link>
          <Link className='create-link' to='/mash-form'>
            <p className='create-mash'>Create New Mash</p>
          </Link>
          <br />
          <div className='search'>
            <input
              type='text'
              placeholder='Enter Game Title'
              onChange={this.props.handleInputChange}
            />
            <button className='search-game' onClick={this.props.handleSubmit}>
              Search
            </button>
          </div>
          <br />
          <Link className='logout-link' onClick={this.props.handleLogoutClick} to='/'>
            <p className='log-out-home'>Log Out</p>
          </Link>
        </section>
      </>
    )
  }
}
