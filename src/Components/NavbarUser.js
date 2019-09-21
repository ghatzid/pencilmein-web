import React from 'react'
import { Link } from 'react-router-dom'

const NavbarUser = () => {
  return (
    <div style={{height: '10vh', display: 'flex', flexDirection: 'row', fontSize: '28px'}}>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/user/profile">
          Profile
        </Link>
      </div>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/user/availability">
        Availability
        </Link>
      </div>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/user/portfolio">
          Portfolio
        </Link>
      </div>
    </div>
  )
}

export default NavbarUser