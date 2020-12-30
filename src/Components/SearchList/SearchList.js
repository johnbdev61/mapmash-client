import React from 'react'
import MyMashCard from '../MyMashCard/MyMashCard'

export default function SearchList(props) {
  let mashByGame = props.mashes.filter((mash) =>
    mash.game_title
      .toLowerCase()
      .includes(props.match.params.gameName.toLowerCase())
  )
  return (
    <>
      <section className='search-list'>
        <h2>Mash List for {props.game_title}</h2>
        <span className='results'>
          {mashByGame.map((mash) => (
            <MyMashCard {...mash} mashId={mash.id} />
          ))}
        </span>
      </section>
    </>
  )
}
