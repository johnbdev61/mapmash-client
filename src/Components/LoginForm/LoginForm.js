import React from 'react'
import { Redirect } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'
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
    console.log('calling post login')
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(() => {
        console.log('login successful')
        this.setState({ isAuthenticated: true })
      })
      .catch((res) => {
        console.log('ERROR', res)
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
        <h1>Login to Map Mash</h1>
        <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <div className='username'>
            <label htmlFor='LoginForm__username'>Username</label>
            <Input required name='username' id='LoginForm__username'></Input>
          </div>
          <div className='password'>
            <label htmlFor='LoginForm__password'>Password</label>
            <Input
              required
              name='password'
              type='password'
              id='LoginForm__password'
            ></Input>
          </div>
          <Button type='submit'>Login</Button>
        </form>
      </>
    )
  }
}
