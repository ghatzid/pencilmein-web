import React, { Component } from 'react'


class TagMgmt extends Component {

  logout() {
    localStorage.clear();
    window.location.href = '/';
}

render() {
  return ( 
    <div>

      Tag Management Container
     
    </div>
    )
  }
}


export default TagMgmt

















