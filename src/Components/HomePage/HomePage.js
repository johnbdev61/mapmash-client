import React from 'react'
import MyMashCard from '../MyMashCard/MyMashCard'
import './HomePage.css'
import MashApiService from '../../services/mash-api-service'

export default class HomePage extends React.Component {
  static defaultProps = {
    mashes: [],
  }

  componentDidMount() {
    MashApiService.getMashes().then((data) => this.props.setMashes(data))
  }

  render() {
    return (
      <>
        <section className='user-mash-list'>
          <h2 className='list-bar'>My Mashes</h2>
          <div className='mash-card mash-card:hover'>
            {this.props.mashes
              .filter((mash) => mash.author_id === this.props.userId)
              .map((mash) => (
                <MyMashCard
                  key={mash.id}
                  mashId={mash.id}
                  game_title={mash.game_title}
                  author_id={mash.author_id}
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
