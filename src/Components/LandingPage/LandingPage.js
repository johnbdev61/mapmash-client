import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <>
      <section className='intro'>
        <h2>Welcome to Map Mash</h2>
        <p>
          This application is for gamers who want to show off their perfect
          button layouts (Mashes) for any game on Xbox. Map Mash is also the
          perfect fit for gamers who just want to explore other Mashes and learn
          what the best configurations are for the games they want to break
          into.
          <br />
          You may create new mashes for your favortie games, or you can search
          by game title for other user's Mashes. Log in or create an account to
          get started.
        </p>
      </section>
      <section className='log-in'>
        <form action=''>
          <input type='text' placeholder='Username' />
          <br />
          <input type='text' placeholder='Password' />
          <br />
          <button>Login</button>
          <button>Create Account</button>
        </form>
      </section>
    </>
  )
}
