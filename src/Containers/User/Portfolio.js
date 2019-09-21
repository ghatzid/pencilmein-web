import React, { Component } from 'react'
import UserAssetGallery from '../../Components/UserAssetGallery';
import UserAssetUpload from '../../Components/UserAssetUpload';

class Portfolio extends Component {

  logout() {
    localStorage.clear();
    window.location.href = '/';
}

render() {
  return ( 
    <div>

      Portfolio  Container
      <UserAssetUpload/>
      <UserAssetGallery/>
    </div>
    )
  }
}


export default Portfolio

















