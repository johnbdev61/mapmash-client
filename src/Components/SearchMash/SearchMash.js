import React from 'react'
import { Link } from 'react-router-dom'
import Bind from '../Bind/Bind'
import MashApiService from '../../services/mash-api-service'

export default class SearchMash extends React.Component {
  // state = { mash: {} }
  // componentDidMount() {
  //   console.log('MASH ID', this.props.match.params.mashId)
  //   MashApiService.getMash(this.props.match.params.mashId).then((mash) =>
  //     this.setState({ mash })
  //   )
  // }

  render() {
    console.log('MASH', this.state.mash)
    return (
      <>
        <section>
          <h2>{this.state.mash.game_title}</h2>
          <section className='Delete'>
            <button onClick={this.handleDeleteClick}>Delete</button>
          </section>
          <p>Date Modified: {this.state.mash.date_modified}</p>
          <Bind binds={this.state.mash.binds} />
          <h3>Notes</h3>
          <p>{this.state.mash.notes}</p>
          <Link to='/home'>Go Back</Link>
        </section>
      </>
    )
  }
}
