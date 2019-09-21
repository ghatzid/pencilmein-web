import React, { Component } from 'react'
import { withRouter } from 'react-router'
class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          console.log("no good")
        } 
        else  {
        localStorage.setItem('token', data.token)
        // check if logged in user is admin
        if (data.user.is_admin) { 
          this.props.history.push('/admin')
        } 
        else  {
          this.props.history.push('/user')
        }
      }
    })

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <label>Password: </label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          <button>login</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)