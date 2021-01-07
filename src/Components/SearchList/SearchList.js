import React from 'react'
import MyMashCard from '../MashCard/MyMashCard'
import './SearchList.css'
import MashApiService from '../../services/mash-api-service'

export default class SearchList extends React.Component {
  componentDidMount() {
    MashApiService.getMashes().then((data) => this.props.setMashes(data))
  }

  render() {
    let mashByGame = this.props.mashes.filter((mash) =>
      mash.game_title
        .toLowerCase()
        .includes(this.props.match.params.gameName.toLowerCase())
    )
    return (
      <>
        <section className='search-list'>
          <h2 className='search-title'>
            Mash Search List for {this.props.match.params.gameName}
          </h2>
          <span className='results'>
            {mashByGame.map((mash) => (
              <MyMashCard key={mash.id} {...mash} mashId={mash.id} />
            ))}
          </span>
        </section>
      </>
    )
  }
}

SearchList.defaultProps = {
  mashes: [],
  match: { params: [] },
}
