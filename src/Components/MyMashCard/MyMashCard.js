import React from 'react'
import { Link } from 'react-router-dom'
import './MyMashCard.css'

export default function MashCard(props) {
  return (
    <>
      <section className='mash-card mash-card:hover'>
        <h3>
          <Link to={`/mashes/${props.mashId}`}>{props.game_title}</Link>
        </h3>
        <p>Votes: {props.votes}</p>
        <p>Date Created: {props.date_modified}</p>
      </section>
    </>
  )
}
