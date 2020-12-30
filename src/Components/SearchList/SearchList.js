import React from 'react'
import SearchMashCard from '../SearchMashCard/SearchMashCard'

export default function SearchList(props) {
  return (
    <>
      <section className='search-list'>
        <h2>Mash List for {props.game_title}</h2>
        <span className='results'>
          <SearchMashCard />
        </span>
      </section>
    </>
  )
}
