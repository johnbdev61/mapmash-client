import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MyMash from './MyMash'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <MyMash />
    </BrowserRouter>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
