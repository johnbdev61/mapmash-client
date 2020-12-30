import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import MyMashCard from '../MyMashCard/MyMashCard'

export default class HomePage extends React.Component {
  state = { redirectUrl: '' }
  render() {
    if (this.state.redirectUrl) {
      return <Redirect to={this.state.redirectUrl} />
    }
    return (
      <>
        <h1>Map Mash</h1>
        <section>
          <Link to='/mash-form'>Create New Mash</Link>
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
          <Link onClick={this.props.handleLogoutClick} to='/'>
            Log Out
          </Link>
        </section>
        <section className='user-mash-list'>
          <h2>User Mash List</h2>
          <div className='mash-card mash-card:hover'>
            {this.props.mashes.map((mash) => (
              <MyMashCard
                key={mash.id}
                mashId={mash.id}
                game_title={mash.game_title}
                auth_id={mash.auth_id}
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
