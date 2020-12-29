import React, { Component } from 'react'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import config from '../../config'
import ApiContext from '../../ApiContext'
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'
import HomePage from '../HomePage/HomePage'
import MashForm from '../MashForm/MashForm'
import Mash from '../MyMash/MyMash'
import SearchList from '../SearchList/SearchList'
import SearchMash from '../SearchMash/SearchMash'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
// import {UserContext}

export default class App extends Component {
  state = {
    mashes: [],
    binds: [{}],
  } //TODO: Implement context

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
            <Route path='/home'>
              <HomePage />
            </Route>
            <Route path='/mash-form'>
              <MashForm />
            </Route>
            <Route path='/my-mash'>
              <Mash />
            </Route>
            <Route path='/search'>
              <SearchList />
            </Route>
            <Route path='/search-mash'>
              <SearchMash />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
