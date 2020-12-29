import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import ApiContext from '../../ApiContext'
import config from '../../config'
import TokenService from '../../services/token-service'

class MashForm extends React.Component {
  static defaultProps = {
    onCreateMash: () => {},
    onCreateBind: () => [],
  }
  static contextType = ApiContext

  handleCreateMash = (event) => {
    event.preventDefault()
    console.log(event)
    const newMash = {
      game_title: event.target.game_title.value,
      notes: event.target.notes.value,
      date_modified: new Date().toISOString(),
    }
    fetch(`${config.API_ENDPOINT}/mashes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newMash),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('MASH ID', result.id)
        let formData = new FormData(event.target)
        let newBind = []
        for (let [key, value] of formData) {
          if (key !== 'game_title' && key !== 'notes') {
            newBind.push({
              mash_id: result.id,
              key_input: key,
              key_action: value,
            })
          }
        }
        console.log('NEW BIND', newBind)
        fetch(`${config.API_ENDPOINT}/binds`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(newBind),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log('ALL BINDS', result)
          })
        this.props.onCreateMash(result)
        this.props.history.push('/home')
      })
  }

  render() {
    return (
      <>
        <section className='mash-form'>
          <h2>New Mash</h2>
          <form action='' onSubmit={(e) => this.handleCreateMash(e)}>
            <label for='enter-game'>Game</label>
            <br />
            <input type='text' name='game_title' />
            <br />
            <label for='a-button'>A Button</label>
            <br />
            <input type='text' name='a_button' id='a-button' />
            <br />
            <label for='b-button'>B Button</label>
            <br />
            <input type='text' name='b_button' id='b-button' />
            <br />
            <label for='x-button'>X Button</label>
            <br />
            <input type='text' name='x_button' id='x-button' />
            <br />
            <label for='y-button'>Y Button</label>
            <br />
            <input type='text' name='y_button' id='y-button' />
            <br />
            <label for='right-bumper'>Right Bumper</label>
            <br />
            <input type='text' name='right_bumper' id='right-bumper' />
            <br />
            <label for='left-bumper'>Left Bumper</label>
            <br />
            <input type='text' name='left_bumper' id='left-bumper' />
            <br />
            <label for='right-trigger'>Right Trigger</label>
            <br />
            <input type='text' name='right_trigger' id='right-trigger' />
            <br />
            <label for='left-trigger'>Left Trigger</label>
            <br />
            <input type='text' name='left_trigger' id='left-trigger' />
            <br />
            <label for='left-stick'>Left Stick</label>
            <br />
            <input type='text' name='left_stick' id='left-stick' />
            <br />
            <label for='left-click'>Left Stick Click</label>
            <br />
            <input type='text' name='left_click' id='left-click' />
            <br />
            <label for='right-stick'>Right Stick</label>
            <br />
            <input type='text' name='right_stick' id='right-stick' />
            <br />
            <label for='right-click'>Right Stick Click</label>
            <br />
            <input type='text' name='right_click' id='right-click' />
            <br />
            <label for='dpad-up'>D-Pad Up</label>
            <br />
            <input type='text' name='dpad_up' id='dpad-up' />
            <br />
            <label for='dpad-right'>D-Pad Right</label>
            <br />
            <input type='text' name='dpad_right' id='dpad-right' />
            <br />
            <label for='dpad-down'>D-Pad Down</label>
            <br />
            <input type='text' name='dpad_down' id='dpad-down' />
            <br />
            <label for='dpad-left'>D-Pad Left</label>
            <br />
            <input type='text' name='dpad_left' id='dpad-left' />
            <br />
            <label for='note-section'>Notes</label>
            <br />
            <textarea
              name='notes'
              id='note-section'
              cols='50'
              rows='10'
              placeholder='Enter notes about your mash'
            ></textarea>
            <input type='submit' />
            <Link to='/home'>Cancel</Link>
          </form>
        </section>
      </>
    )
  }
}

export default withRouter(MashForm)
