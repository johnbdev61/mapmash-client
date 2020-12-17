import React from 'react'

export default function HomePage() {
  return (
    <>
      <h1>Map Mash</h1>
      <section>
        <form action=''>
          <button className='add-mash'>Create New Mash</button>
          <button className='log-out'>Log Out</button>
          <input type='text' placeholder='Enter Game' />
          <button className='search-game'>Search</button>
        </form>
      </section>
      <section class='user-mash-list'>
        <h2>User Mash List</h2>
        <div class='mash-card mash-card:hover'>
          <h3>
            <a href='/OpenMash.html'>Halo 3</a>
          </h3>
          <p>Rating: 4.8 / 5</p>
          <p>Date Created: 12-01-2020</p>
        </div>
      </section>
    </>
  )
}
