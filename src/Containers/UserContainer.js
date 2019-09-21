import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavbarUser from '../Components/NavbarUser';
import Logout from '../Components/Logout'
import Profile from './User/Profile';
import Availability from './User/Availability';
import Portfolio from './User/Portfolio';

class UserContainer extends Component {

  logout() {
    localStorage.clear();
    window.location.href = '/';
}

render() {
  return ( 
    <div>
      <NavbarUser />
      This is the User Landing Page
      
      <Switch>
      <Route path="/user/profile" render={() => {
            return (
              <div>
                <Profile/>
              </div>
            )
          }} />      
      <Route path="/user/availability" render={() => {
        return (
          <div>
            <Availability/>
          </div>
        )
      }} />
      <Route path="/user/portfolio" render={() => {
        return (
          <div>
            <Portfolio/>
          </div>
        )
      }} />
      </Switch>

      <Logout />
    </div>
    )
  }
}


export default UserContainer

















