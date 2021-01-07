import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Mash from './Mash'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <BrowserRouter>
      <Mash />
    </BrowserRouter>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
