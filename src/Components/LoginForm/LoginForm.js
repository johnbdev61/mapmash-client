import React from 'react'
import { Redirect } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../../Utils/Utils'
import './LoginForm.css'

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  }

  state = {
    error: null,
    isAuthenticated: false,
  }

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(() => {
        this.setState({ isAuthenticated: true })
        this.props.onLogin(true)
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
        <h1 className='login'>Login to Map Mash</h1>
        <form className='login-form' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <div className='username'>
            <label className='username' htmlFor='LoginForm__username'>
              Username
            </label>
            <Input
              aria-label='Username'
              className='name-pass-btn'
              required
              name='username'
              id='LoginForm__username'
            ></Input>
          </div>
          <div className='password'>
            <label className='password' htmlFor='LoginForm__password'>
              Password
            </label>
            <Input
              aria-label='Username'
              className='name-pass-btn'
              required
              name='password'
              type='password'
              id='LoginForm__password'
            ></Input>
          </div>
          <Button aria-label='Login' className='name-pass-btn' type='submit'>
            Login
          </Button>
        </form>
      </>
    )
  }
}
