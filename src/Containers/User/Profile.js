import React, { Component } from 'react'
import UserSummary from '../../Components/UserSummary';
import UserTags from '../../Components/UserTags';

class Profile extends Component {

  logout() {
    localStorage.clear();
    window.location.href = '/';
}

render() {
  return ( 
    <div>

      Profile  Container
      <UserSummary />
      <UserTags />
    </div>
    )
  }
}


export default Profile

















