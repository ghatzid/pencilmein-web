import React from 'react'
import {connect} from 'react-redux'
import NotAuthorized from './NotAuthorized'

const Welcome = ( { user }) => {
  return (
    <> 
    {user ? 
      (<div>
          <h1>Welcome!</h1>
          <button>Log Out </button>
      </div>) 
      : 
      (<div><NotAuthorized />
            <button onClick={clickHandler}>Log In </button>
      </div>)}
     
    </>
  )
}

function msp(state){
  return { loggedIn: state.loggedIn }
}

export default connect(mapStateToProps)(Welcome) 