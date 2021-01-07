import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MyMashCard from './MyMashCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <MyMashCard />
    </BrowserRouter>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
