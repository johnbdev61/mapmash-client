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
              <label htmlFor='enter-game'>Game</label>
              <br />
              <input aria-label='Game Title' type='text' name='game_title' />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='a-button'>A Button</label>
              <br />
              <input
                aria-label='A Button'
                type='text'
                name='A Button'
                id='a-button'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='b-button'>B Button</label>
              <br />
              <input
                aria-label='B Button'
                type='text'
                name='B Button'
                id='b-button'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='x-button'>X Button</label>
              <br />
              <input
                aria-label='X Button'
                type='text'
                name='X Button'
                id='x-button'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='y-button'>Y Button</label>
              <br />
              <input
                aria-label='Y Button'
                type='text'
                name='Y Button'
                id='y-button'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='right-bumper'>Right Bumper</label>
              <br />
              <input
                aria-label='Right Bumper'
                type='text'
                name='Right Bumper'
                id='right-bumper'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='left-bumper'>Left Bumper</label>
              <br />
              <input
                aria-label='Left Bumper'
                type='text'
                name='Left Bumper'
                id='left-bumper'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='right-trigger'>Right Trigger</label>
              <br />
              <input
                aria-label='Right Trigger'
                type='text'
                name='Right Trigger'
                id='right-trigger'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='left-trigger'>Left Trigger</label>
              <br />
              <input
                aria-label='Left Trigger'
                type='text'
                name='Left Trigger'
                id='left-trigger'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='left-stick'>Left Stick</label>
              <br />
              <input
                aria-label='Left Stick'
                type='text'
                name='Left Stick'
                id='left-stick'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='left-click'>Left Stick Click</label>
              <br />
              <input
                aria-label='Left Click'
                type='text'
                name='Left Click'
                id='left-click'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='right-stick'>Right Stick</label>
              <br />
              <input
                aria-label='Right Stick'
                type='text'
                name='Right Stick'
                id='right-stick'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='right-click'>Right Stick Click</label>
              <br />
              <input
                aria-label='Right Click'
                type='text'
                name='Right Click'
                id='right-click'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='dpad-up'>D-Pad Up</label>
              <br />
              <input
                aria-label='D-Pad Up'
                type='text'
                name='D-Pad Up'
                id='dpad-up'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='dpad-right'>D-Pad Right</label>
              <br />
              <input
                aria-label='D-Pad Right'
                type='text'
                name='D-Pad Right'
                id='dpad-right'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='dpad-down'>D-Pad Down</label>
              <br />
              <input
                aria-label='D-Pad Down'
                type='text'
                name='D-Pad Down'
                id='dpad-down'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='dpad-left'>D-Pad Left</label>
              <br />
              <input
                aria-label='D-Pad Left'
                type='text'
                name='D-Pad Left'
                id='dpad-left'
              />
            </div>
            <br />
            <div className='input-wrapper'>
              <label htmlFor='note-section'>Notes</label>
              <br />
              <textarea
                aria-label='Notes'
                className='notes'
                name='notes'
                id='note-section'
                cols='50'
                rows='10'
                placeholder='Enter notes about your mash'
              ></textarea>
              <input aria-label='Submit' className='submit-btn' type='submit' />
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
