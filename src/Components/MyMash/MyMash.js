import React from 'react'
import { Link } from 'react-router-dom'
import Bind from '../Bind/Bind'
import MashApiService from '../../services/mash-api-service'

export default class Mash extends React.Component {
  state = { mash: {} }
  componentDidMount() {
    console.log('MASH ID', this.props.match.params.mashId)
    MashApiService.getMash(this.props.match.params.mashId).then((mash) =>
      this.setState({ mash })
    )
  }
  handleDeleteClick = () => {
    MashApiService.deleteMash(this.props.match.params.mashId).then(() =>
      this.props.history.push('/home')
    )
  }
  handleLikeClick = () => {
    MashApiService.addVote({ isUpvote: true, mashId: this.props.match.params.mashId })
  }

  render() {
    console.log('MASH', this.state.mash)
    return (
      <>
        <section>
          <h2>{this.state.mash.game_title}</h2>
          {this.props.isUserMash ? (
            <section className='Delete'>
              <button onClick={this.handleDeleteClick}>Delete</button>
            </section>
          ) : (
            <section className='Delete'>
              <button onClick={this.handleLikeClick}>Like Mash</button>
            </section>
          )}
          <p>Date Created: {this.state.mash.date_modified}</p>
          <Bind binds={this.state.mash.binds} />
          <h3>Notes</h3>
          <p>{this.state.mash.notes}</p>
          <Link to='/home'>Go Back</Link>
        </section>
      </>
    )
  }
}
