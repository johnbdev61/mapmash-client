import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Input, Required } from '../../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
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
      .then(() => {
        this.setState({ isAuthenticated: true })
        this.props.onRegister(true)
      })
      .catch((res) => {
        this.setState({ error: res.error })
      })
  }
  render() {
    const { isAuthenticated } = this.state
    if (isAuthenticated) {
      return <Redirect to='/login' />
    }
    const { error } = this.state
    return (
      <>
        <h1 className='register'>Register to Use Map Mash</h1>
        <form className='registration-form' onSubmit={this.handleSubmit}>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <div className='username'>
            <label htmlFor='RegistrationForm__username'>
              Username <Required />
            </label>
            <Input
              aria-label='Username'
              className='user-pass-btn'
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
              aria-label='Password'
              className='user-pass-btn'
              name='password'
              type='password'
              required
              id='RegistrationForm__password'
            ></Input>
          </div>
          <Button aria-label='Register' className='user-pass-btn' type='submit'>
            Register
          </Button>
        </form>
      </>
    )
  }
}
