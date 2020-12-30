import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import MashApiService from '../../services/mash-api-service'
import MyMashCard from '../MyMashCard/MyMashCard'

export default class HomePage extends React.Component {
  state = {
    mashes: [],
    gameTitle: '',
  }

  componentDidMount() {
    console.log(process.env)
    MashApiService.getMashes().then((data) => this.setState({ mashes: data }))
  }
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    console.log('LOGGED OUT')
  }
  handleInputChange = (event) => {
    const { value } = event.target
    this.setState({ gameTitle: value })
  }
  handleSubmit = () => {
    const { gameTitle } = this.state
    this.props.history.push(`/game/${gameTitle}/mashes`)
  }

  render() {
    return (
      <>
        <h1>Map Mash</h1>
        <section>
          <Link to='/mash-form'>Create New Mash</Link>
          <input
            type='text'
            placeholder='Enter Game Title'
            onChange={this.handleInputChange}
          />
          <button className='search-game' onClick={this.handleSubmit}>
            Search
          </button>
          <Link onClick={this.handleLogoutClick} to='/'>
            Log Out
          </Link>
        </section>
        <section className='user-mash-list'>
          <h2>User Mash List</h2>
          <div className='mash-card mash-card:hover'>
            {this.state.mashes.map((mash) => (
              <MyMashCard
                mashId={mash.id}
                game_title={mash.game_title}
                votes={mash.votes}
                date_modified={mash.date_modified}
              />
            ))}
          </div>
        </section>
      </>
    )
  }
}
