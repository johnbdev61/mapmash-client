import React from 'react'
import MyMashCard from '../MyMashCard/MyMashCard'
import './HomePage.css'

export default class HomePage extends React.Component {
  render() {
    return (
      <>
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
