import React from 'react'
import { Link } from 'react-router-dom'
import './MyMashCard.css'
import MashApiService from '../../services/mash-api-service'

// const userName = MashApiService.getUsers()

export default function MashCard(props) {
  return (
    <>
      <section className='mash-card mash-card:hover'>
        <h3 className='mash-link'>
          <Link className='mash-link' to={`/mashes/${props.mashId}`}>
            {props.game_title}
          </Link>
        </h3>
        <p className='votes-username-date'>Votes: {props.votes}</p>
        {props.author_id}
        <p className='votes-username-date'>
          Date Created: {props.date_modified}
        </p>
      </section>
    </>
  )
}
