import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'
import HomePage from '../HomePage/HomePage'
import MashForm from '../MashForm/MashForm'
import Mash from '../MyMash/MyMash'
import config from '../../config'
import SearchList from '../SearchList/SearchList'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import TokenService from '../../services/token-service'

export default class App extends Component {
  state = {
    mashes: [],
    gameTitle: '',
    isLoggedIn: false,
  }

  componentDidMount() {
    console.log('app re-mounting')
    console.log(process.env)
    const userId = TokenService.getUserId()
    this.setState({ isLoggedIn: !!userId })
  }
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.setState({ isLoggedIn: false })
    console.log('LOGGED OUT')
  }
  handleInputChange = (event) => {
    const { value } = event.target
    this.setState({ gameTitle: value })
  }
  handleSubmit = () => {
    const { gameTitle } = this.state
    window.location.replace(`/game/${gameTitle}/mashes`)
  }
  handleLoginStatus = (isLoggedIn) => {
    this.setState({ isLoggedIn })
  }
  handleDeletedMash = (mashId) => {
    const updatedMashes = this.state.mashes.filter((mash) => {
      return mash.id !== mashId
    })
    this.setState({ mashes: updatedMashes })
  }
  setMashes = (mashes) => {
    this.setState({ mashes })
  }
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
        Authorization: `bearer ${TokenService.getAuthToken()}`,
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
            Authorization: `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(newBind),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log('ALL BINDS', result)
          })
        window.location.replace('/home')
      })
  }

  render() {
    console.log(window.location.pathname)
    return (
      <BrowserRouter>
        <div className='App'>
          {this.state.isLoggedIn && (
            <Nav
              handleCreateMash={this.handleCreateMash}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              handleLogoutClick={this.handleLogoutClick}
            />
          )}
          <Switch>
            <Route exact path='/'>
              <Header handleLogoutClick={this.handleLogoutClick} />
            </Route>
            <Route path='/register'>
              <RegistrationForm />
            </Route>
            <Route path='/login'>
              <LoginForm onLogin={this.handleLoginStatus} />
            </Route>
            <Route
              path='/home'
              render={(props) => (
                <HomePage
                  {...props}
                  setMashes={this.setMashes}
                  mashes={this.state.mashes}
                  userId={TokenService.getUserId()}
                />
              )}
            />
            <Route path='/mash-form'>
              <MashForm onSubmit={this.handleCreateMash} />
            </Route>
            <Route
              render={(props) => (
                <Mash
                  onDelete={this.handleDeletedMash}
                  {...props}
                  userId={TokenService.getUserId()}
                />
              )}
              path='/mashes/:mashId'
            />
            <Route
              render={(props) => (
                <SearchList
                  {...props}
                  setMashes={this.setMashes}
                  mashes={this.state.mashes}
                />
              )}
              path='/game/:gameName/mashes'
            ></Route>
            <Route render={Mash} path='/game/:gameName/mashes/:mashId' />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
