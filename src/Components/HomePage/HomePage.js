import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/token-service'
import MashApiService from '../../services/mash-api-service'
import MyMashCard from '../MyMashCard/MyMashCard'

export default class HomePage extends React.Component {
  state = { mashes: []}
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    console.log('LOGGED OUT')
  }
  componentDidMount() {
    console.log(process.env)
    MashApiService.getMashes().then((data) => this.setState({ mashes: data }))
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
            {this.state.mashes.map((mash) => <MyMashCard game_title= {mash.game_title} votes={mash.votes} date_modified= {mash.date_modified}/>)}
          </div>
        </section>
      </>
    )
  }
}