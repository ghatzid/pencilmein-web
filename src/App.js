import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import UserContainer from './Containers/UserContainer';
import AdminContainer from './Containers/AdminContainer';
import BadURL from './Containers/BadURL';
class App extends Component {
  state = {
    user: null
  };

  // CDM
  componentDidMount() {
    // check if state.user is null
    // check if localstorage has a userid
    // then fetch 
    const token = localStorage.getItem('token')
    console.log(`token: ${token}`)
    if (token) {
      fetch(`http://localhost:3000/api/v1/autologin`, {
        headers: {
          'accept': 'application/json', 
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({user: data})
          if (data.errors) {
            console.log("no good")
          } 
          else  {
          // localStorage.setItem('token', data.token)
          // check if logged in user is admin
          if (data.is_admin) { 
            this.props.history.push('/admin')
          } 
          else  {
            this.props.history.push('/user')
          }
        }
      })                
    }
  }

  setUser = user => {
    this.setState({user: user})
  }

  render() {
    console.log('APP STATE USER', this.state.user)
    return (
      <div>
        <Switch>
        <Route path="/user" render={() => {
            return (
              <div>
                <UserContainer/>
              </div>
            )
          }} />

        <Route path="/admin" render={() => {
            return (
              <div>
                <AdminContainer/>
              </div>
            )
          }} />
                
        <Route exact path="/" render={() => 
          <Login user={this.state.user} setUser={this.setUser} />}
        />
        <Route component={BadURL} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

