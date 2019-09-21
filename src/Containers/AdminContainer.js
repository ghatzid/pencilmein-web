import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavbarAdmin from '../Components/NavbarAdmin';
import UserMgmt from '../Containers/Admin/UserMgmt';
import Logout from '../Components/Logout'
import TagMgmt from './Admin/TagMgmt';
import PortfolioMgmt from './Admin/PortfolioMgmt';


class AdminContainer extends Component {

  logout() {
    localStorage.clear();
    window.location.href = '/';
}

render() {
  return ( 
    <div>
      <NavbarAdmin />
      This is the Admin Landing Page
      
      <Switch>
      <Route path="/admin/user_mgmt" render={() => {
            return (
              <div>
                <UserMgmt/>
              </div>
            )
          }} />      
      <Route path="/admin/tag_mgmt" render={() => {
        return (
          <div>
            <TagMgmt/>
          </div>
        )
      }} />
      <Route path="/admin/portfolio_mgmt" render={() => {
        return (
          <div>
            <PortfolioMgmt/>
          </div>
        )
      }} />
      </Switch>

      <Logout />
    </div>
    )
  }
}


export default AdminContainer

















