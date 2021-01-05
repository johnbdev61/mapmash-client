import React, { Component } from 'react'
import './Bind.css'

export default class Bind extends Component {
  //TODO: FIX ERROR AFTER REFRESH
  static defaultProps = {
    binds: [],
  }
  renderTableData() {
    return this.props.binds.map((bind) => {
      const { id, key_input, key_action } = bind
      return (
        <tr key={id}>
          <td>{key_input}</td>
          <td>{key_action}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table className='table-center'>
          <tbody>
            <tr>
              <th>Controller Button</th>
              <th>Action</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}
