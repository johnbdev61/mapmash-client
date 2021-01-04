import React from 'react'
import MyMashCard from '../MyMashCard/MyMashCard'
import './SearchList.css'

export default function SearchList(props) {
  let mashByGame = props.mashes.filter((mash) =>
    mash.game_title
      .toLowerCase()
      .includes(props.match.params.gameName.toLowerCase())
  )
  return (
    <>
      <section className='search-list'>
        <h2 className='search-title'>Mash List for {props.match.params.gameName}</h2>
        <span className='results'>
          {mashByGame.map((mash) => (
            <MyMashCard key={mash.id} {...mash} mashId={mash.id} />
          ))}
        </span>
      </section>
    </>
  )
}
