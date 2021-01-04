import React from 'react'
import { Link } from 'react-router-dom'
import './MyMashCard.css'
import MashApiService from '../../services/mash-api-service'

// const userName = MashApiService.getUsers()

export default function MashCard(props) {
  return (
    <>
      <section className='mash-card mash-card:hover'>
        <h3>
          <Link to={`/mashes/${props.mashId}`}>{props.game_title}</Link>
        </h3>
        <p>Votes: {props.votes}</p>
        {props.author_id}
        <p>Date Created: {props.date_modified}</p>
      </section>
    </>
  )
}
