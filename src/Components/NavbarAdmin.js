import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
  return (
    <div style={{height: '10vh', display: 'flex', flexDirection: 'row', fontSize: '28px'}}>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/admin/user_mgmt">
          Users
        </Link>
      </div>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/admin/tag_mgmt">
        Tags
        </Link>
      </div>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/admin/portfolio_mgmt">
          Portfolios
        </Link>
      </div>
    </div>
  )

  
}

export default NavbarAdmin