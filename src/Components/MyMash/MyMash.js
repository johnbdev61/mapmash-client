import React from 'react'
import { Link } from 'react-router-dom'
import Bind from '../Bind/Bind'
import MashApiService from '../../services/mash-api-service'
import './MyMash.css'

export default class Mash extends React.Component {
  state = { mash: {} }
  componentDidMount() {
    console.log('MASH ID', this.props.match.params.mashId)
    MashApiService.getMash(this.props.match.params.mashId).then((mash) =>
      this.setState({ mash })
    )
  }
  handleDeleteClick = () => {
    MashApiService.deleteMash(this.props.match.params.mashId).then(() => {
      this.props.onDelete(Number(this.props.match.params.mashId))
      this.props.history.push('/home')
    })
  }
  handleLikeClick = () => {
    MashApiService.addVote({
      isUpvote: true,
      mashId: Number(this.props.match.params.mashId),
    })
  }

  render() {
    // console.log('USER ID', this.state.mash.author_id)
    return (
      <>
        <section className='mash'>
          <h2 className='game-title'>{this.state.mash.game_title}</h2>
          {this.props.userId === this.state.mash.author_id ? (
            <section className='Delete'>
              <button onClick={this.handleDeleteClick}>Delete</button>
            </section>
          ) : (
            <section className='Delete'>
              <button onClick={this.handleLikeClick}>Like Mash</button>
            </section>
          )}
          <p className='date-created'>
            Date Created: {this.state.mash.date_modified}
          </p>
          <Bind binds={this.state.mash.binds} />
          <h3 className='notes-header'>Notes</h3>
          <p className='user-notes'>{this.state.mash.notes}</p>
          <hr/>
          <Link className='go-back' to='/home'>
            <p>Go Back</p>
          </Link>
        </section>
      </>
    )
  }
}
