import React from 'react'
import { Link } from 'react-router-dom'
import './SearchMashCard.css'

export default function SearchMashCard(props) {
  return (
    <>
      <section className='mash-card mash-card:hover'>
        <h3>
          <Link to={`/game/:gameName/mashes/${props.mashId}`}>
            {props.game_title}
          </Link>
        </h3>
        <p>Mash by User</p>
        <p>Votes: {props.votes}</p>
        <p>Date Modified: {props.date_modified}</p>
      </section>
    </>
  )
}
