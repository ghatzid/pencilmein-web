import React, { Component } from 'react'


class Availability extends Component {

  logout() {
    localStorage.clear();
    window.location.href = '/';
}

render() {
  return ( 
    <div>

      Availability  Container
     
    </div>
    )
  }
}


export default Availability

















