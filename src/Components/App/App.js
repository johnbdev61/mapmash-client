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

export default class App extends Component {
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
            <Route path='/home' component={HomePage} />
            <Route path='/mash-form'>
              <MashForm />
            </Route>
            <Route component={Mash} path='/mashes/:mashId' />
            <Route component={SearchMashCard} path='/game/:gameName/mashes'>
              <SearchList />
            </Route>
            <Route component={SearchMash} path='/game/:gameName/mashes/:mashId' />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
