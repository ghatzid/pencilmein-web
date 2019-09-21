import React, { Component } from 'react'


class PortfolioMgmt extends Component {

  logout() {
    localStorage.clear();
    window.location.href = '/';
}

render() {
  return ( 
    <div>

      Portfolio Management Container
     
    </div>
    )
  }
}


export default PortfolioMgmt

















