import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class HomePage extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    console.log('LOGGED OUT')
  }
  componentDidMount() {
    console.log(process.env)
    fetch(`${config.API_ENDPOINT}/mashes?user_id=1`) //TODO: Refactor to dynamically populate user id
  }

  render() {
    return (
      <>
        <h1>Map Mash</h1>
        <section>
          <form action=''>
            <button className='add-mash' to='/mash-form'>
              Create New Mash
            </button>
            <Link></Link>
            <input type='text' placeholder='Enter Game' />
            <button className='search-game'>Search</button>
          </form>
        </section>
        <section className='user-mash-list'>
          <h2>User Mash List</h2>
          <div className='mash-card mash-card:hover'>
            <h3>
              <a href='/OpenMash.html'>Halo 3</a>
            </h3>
            <p>Rating: 4.8 / 5</p>
            <p>Date Created: 12-01-2020</p>
          </div>
        </section>
      </>
    )
  }
}
