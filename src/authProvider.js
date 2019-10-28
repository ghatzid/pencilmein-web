import { 
  AUTH_LOGIN, 
  AUTH_LOGOUT, 
  AUTH_ERROR, 
  AUTH_CHECK, 
  AUTH_GET_PERMISSIONS 
} 
from 'react-admin';

import decodeJwt from 'jwt-decode';

export default (type, params) => {

    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
      console.log(`Current type: ${type}`)
        const { username, password } = params;
        console.log("Params:",params)
        const request = new Request('http://localhost:3000/api/v1/login',{
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: new Headers({ 'Content-Type': 'application/json'}),
    })
 
    console.log(request)
    return fetch(request)
      .then(response => {
        console.log(response)
        if (response.errors < 200 || response.status >= 300) {
          console.log(response.errors)
          throw new Error("The Password you've entered is incorrect.");
      }
        return response.json();
      })
      .then(({token}) => {
        const decodedToken = decodeJwt(token);
        console.log("SIGNED IN:", decodedToken)
        localStorage.setItem('token',token);
        localStorage.setItem('role', decodedToken.role);
        localStorage.setItem('profile', decodedToken.userId);
        return Promise.resolve();
      })
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        console.log(`Current type: ${type}`)
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('profile');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        console.log(`Current type: ${type}`)
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        console.log(`Current type: ${type}`)
        console.log(localStorage.getItem('token'))
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    }
    
    if (type === AUTH_GET_PERMISSIONS) {
      console.log(`Current type: ${type}`)      
      const role = localStorage.getItem('role');
      console.log("Role", role)    
      return role ? Promise.resolve(role) : Promise.reject();
    }
    return Promise.reject('Unknown method');
};