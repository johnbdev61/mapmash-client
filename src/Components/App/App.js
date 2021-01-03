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
import SearchMash from '../SearchMash/SearchMash'
import TokenService from '../../services/token-service'
import MashApiService from '../../services/mash-api-service'

export default class App extends Component {
  state = {
    mashes: [],
    gameTitle: '',
  }

  componentDidMount() {
    console.log(process.env)
    const userId = TokenService.getUserId()
    MashApiService.getMashes(userId).then((data) =>
      this.setState({ mashes: data })
    )
  }
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    console.log('LOGGED OUT')
  }
  handleInputChange = (event) => {
    const { value } = event.target
    this.setState({ gameTitle: value })
  }
  handleSubmit = (history) => {
    const { gameTitle } = this.state
    return `/game/${gameTitle}/mashes`
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
        window.location.replace('/home') //TODO: Make this less shitty if you have time
      })
  }

  render() {
    return (
      <BrowserRouter>
        <Nav
          handleCreateMash={this.handleCreateMash}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleLogoutClick={this.handleLogoutClick}
        />
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Header />
            </Route>
            <Route path='/register'>
              <RegistrationForm />
            </Route>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route
              path='/home'
              render={(props) => (
                <HomePage {...props} mashes={this.state.mashes} />
              )}
            />
            <Route path='/mash-form'>
              <MashForm onSubmit={this.handleCreateMash} />
            </Route>
            <Route
              render={(props) => <Mash {...props} isUserMash={true} />}
              path='/mashes/:mashId'
            />
            <Route
              component={(props) => (
                <SearchList {...props} mashes={this.state.mashes} />
              )}
              path='/game/:gameName/mashes'
            ></Route>
            <Route
              component={SearchMash}
              path='/game/:gameName/mashes/:mashId'
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
