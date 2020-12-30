import React, { Component } from 'react'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'
import HomePage from '../HomePage/HomePage'
import MashForm from '../MashForm/MashForm'
import Mash from '../MyMash/MyMash'
import SearchMashCard from '../SearchMashCard/SearchMashCard'
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
    MashApiService.getMashes().then((data) => this.setState({ mashes: data }))
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

  render() {
    return (
      <BrowserRouter>
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
                <HomePage
                  {...props}
                  handleInputChange={this.handleInputChange}
                  handleSubmit={this.handleSubmit}
                  handleLogoutClick={this.handleLogoutClick}
                  mashes={this.state.mashes}
                />
              )}
            />
            <Route path='/mash-form'>
              <MashForm />
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
