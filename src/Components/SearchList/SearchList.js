import React from 'react'
import SearchMashCard from '../SearchMashCard/SearchMashCard'

export default function SearchList() {
  return (
    <>
      <section className='search-list'>
        <h2>Mash List for Game Title</h2>
        <span className='results'>
          <SearchMashCard />
        </span>
      </section>
    </>
  )
}
