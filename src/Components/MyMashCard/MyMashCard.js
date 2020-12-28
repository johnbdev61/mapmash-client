import React from 'react'

export default function MashCard(props) {
  return (
    <>
      <section className='mash-card'>
        <h3>{props.game_title}</h3>
        <p>Votes: {props.votes}</p>
        <p>Date Modified: {props.date_modified}</p>
      </section>
    </>
  )
}
