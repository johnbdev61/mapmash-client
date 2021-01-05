import React from 'react'
import { Link } from 'react-router-dom'
import './MyMashCard.css'
import TokenService from '../../services/token-service'

export default function MashCard(props) {
  const currentUserId = TokenService.getUserId()
  return (
    <>
      <section className='mash-card mash-card:hover'>
        <h3 className='mash-link'>
          <Link className='mash-link' to={`/mashes/${props.mashId}`}>
            {props.game_title}
          </Link>
        </h3>
        <p className='votes-username-date'>Created by: {props.author_id !== currentUserId ? props.username : 'You'}</p>
        <p className='votes-username-date'>Votes: {props.votes}</p>
        <p className='votes-username-date'>
          Date Created: {props.date_modified}
        </p>
      </section>
    </>
  )
}
