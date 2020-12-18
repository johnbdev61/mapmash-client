import React, { Component } from 'react'

export default class BindForm extends Component {
  render() {
    return (
      <div>
        <form action=''>
          <label for='enter-game'>Game</label>
          <br />
          <input type='text' id='enter-game' />
          <br />
          <label for='a-button'>A Button</label>
          <br />
          <input type='text' name='A' id='a-button' />
          <br />
          <label for='b-button'>B Button</label>
          <br />
          <input type='text' name='B' id='b-button' />
          <br />
          <label for='x-button'>X Button</label>
          <br />
          <input type='text' name='X' id='x-button' />
          <br />
          <label for='y-button'>Y Button</label>
          <br />
          <input type='text' name='Y' id='y-button' />
          <br />
          <label for='right-bumper'>Right Bumper</label>
          <br />
          <input type='text' name='RB' id='right-bumper' />
          <br />
          <label for='left-bumper'>Left Bumper</label>
          <br />
          <input type='text' name='LB' id='left-bumper' />
          <br />
          <label for='right-trigger'>Right Trigger</label>
          <br />
          <input type='text' name='RT' id='right-trigger' />
          <br />
          <label for='left-trigger'>Left Trigger</label>
          <br />
          <input type='text' name='LT' id='left-trigger' />
          <br />
          <label for='left-stick'>Left Stick</label>
          <br />
          <input type='text' name='LS' id='left-stick' />
          <br />
          <label for='left-click'>Left Stick Click</label>
          <br />
          <input type='text' name='LC' id='left-click' />
          <br />
          <label for='right-stick'>Right Stick</label>
          <br />
          <input type='text' name='RS' id='right-stick' />
          <br />
          <label for='right-click'>Right Stick Click</label>
          <br />
          <input type='text' name='RC' id='right-click' />
          <br />
          <label for='dpad-up'>D-Pad Up</label>
          <br />
          <input type='text' name='DU' id='dpad-up' />
          <br />
          <label for='dpad-right'>D-Pad Right</label>
          <br />
          <input type='text' name='DR' id='dpad-right' />
          <br />
          <label for='dpad-down'>D-Pad Down</label>
          <br />
          <input type='text' name='DD' id='dpad-down' />
          <br />
          <label for='dpad-left'>D-Pad Left</label>
          <br />
          <input type='text' name='DL' id='dpad-left' />
          <br />
          <label for='note-section'>Notes</label>
          <br />
        </form>  
      </div>
    )
  }
}
