import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MashForm from './MashForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <MashForm />
    </BrowserRouter>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
