import React from 'react'
import Bind from '../Bind/Bind'

export default class SearchMash extends React.Component {
  render() {
    return (
      <>
        <section>
          <h2>Halo 3 Mash</h2>
          <button>Go Back</button>
          <section className='votes'>
            <span className='increment up'></span>
            <span className='count'>4</span>
          </section>
          <p>Date Created: 12-01-2020</p>
          <Bind />
          <h3>Notes</h3>
          <p>
            This is the ultimate Mash for Halo 3 competitive players. I dare you
            to come up with something better!
          </p>
        </section>
      </>
    )
  }
}
