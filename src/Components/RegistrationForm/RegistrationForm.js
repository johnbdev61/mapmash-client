import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  }

  state = {
    error: null,
    isAuthenticated: false,
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch((res) => {
        this.setState({ error: res.error })
      })
  }
  render() {
    const { isAuthenticated } = this.state
    if (isAuthenticated) {
      return <Redirect to='/home' />
    }
    const { error } = this.state
    return (
      <>
        <h1>Register to Use Map Mash</h1>
        <form className='RegistrationForm' onSubmit={this.handleSubmit}>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <div className='username'>
            <label htmlFor='RegistrationForm__username'>
              Username <Required />
            </label>
            <Input
              name='username'
              type='text'
              required
              id='RegistrationForm__user_name'
            ></Input>
          </div>
          <div className='password'>
            <label htmlFor='RegistrationForm__password'>
              Password <Required />
            </label>
            <Input
              name='password'
              type='password'
              required
              id='RegistrationForm__password'
            ></Input>
          </div>
          <Button type='submit'>Register</Button>
        </form>
      </>
    )
  }
}
