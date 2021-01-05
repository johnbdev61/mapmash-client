import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './MashForm.css'

class MashForm extends React.Component {
  static defaultProps = {
    onCreateMash: () => {},
    onCreateBind: () => [],
  }

  render() {
    return (
      <>
        <section className='mash-form'>
          <h2 className='new-mash'>New Mash </h2>
          <form
            className='mash-inputs'
            action=''
            onSubmit={(e) => this.props.onSubmit(e)}
          >
            <div className='input-wrapper game-label'>
              <label for='enter-game'>Game</label>
              <br />
              <input type='text' name='game_title' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='a-button'>A Button</label>
              <br />
              <input type='text' name='A Button' id='a-button' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='b-button'>B Button</label>
              <br />
              <input type='text' name='B Button' id='b-button' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='x-button'>X Button</label>
              <br />
              <input type='text' name='X Button' id='x-button' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='y-button'>Y Button</label>
              <br />
              <input type='text' name='Y Button' id='y-button' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='right-bumper'>Right Bumper</label>
              <br />
              <input type='text' name='Right Bumper' id='right-bumper' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='left-bumper'>Left Bumper</label>
              <br />
              <input type='text' name='Left Bumper' id='left-bumper' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='right-trigger'>Right Trigger</label>
              <br />
              <input type='text' name='Right Trigger' id='right-trigger' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='left-trigger'>Left Trigger</label>
              <br />
              <input type='text' name='Left Trigger' id='left-trigger' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='left-stick'>Left Stick</label>
              <br />
              <input type='text' name='Left Stick' id='left-stick' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='left-click'>Left Stick Click</label>
              <br />
              <input type='text' name='Left Click' id='left-click' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='right-stick'>Right Stick</label>
              <br />
              <input type='text' name='Right Stick' id='right-stick' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='right-click'>Right Stick Click</label>
              <br />
              <input type='text' name='Right Click' id='right-click' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='dpad-up'>D-Pad Up</label>
              <br />
              <input type='text' name='D-Pad Up' id='dpad-up' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='dpad-right'>D-Pad Right</label>
              <br />
              <input type='text' name='D-Pad Right' id='dpad-right' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='dpad-down'>D-Pad Down</label>
              <br />
              <input type='text' name='D-Pad Down' id='dpad-down' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='dpad-left'>D-Pad Left</label>
              <br />
              <input type='text' name='D-Pad Left' id='dpad-left' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label for='note-section'>Notes</label>
              <br />
              <textarea
                className='notes'
                name='notes'
                id='note-section'
                cols='50'
                rows='10'
                placeholder='Enter notes about your mash'
              ></textarea>
              <input className='submit-btn' type='submit' />
            </div>
            <Link to='/home'>
              <button className='back-btn'>Go Back</button>
            </Link>
          </form>
        </section>
      </>
    )
  }
}

export default withRouter(MashForm)
