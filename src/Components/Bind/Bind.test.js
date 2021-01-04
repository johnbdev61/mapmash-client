import React from 'react'
import ReactDOM from 'react-dom'
import Bind from './Bind'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Bind />, div)

  ReactDOM.unmountComponentAtNode(div)
})
