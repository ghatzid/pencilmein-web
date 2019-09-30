// in src/App.js
import React, { Component } from 'react';
import { Admin, Resource,EditGuesser,ListGuesser} from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Users';
import { TagList, TagEdit, TagCreate, TagFilter} from './Tags';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import DataProvider from './DataProvider';
import { minLength } from 'ra-core';

// import jsonServerProvider from 'ra-data-json-server';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');




class App extends Component {
  
  render(){
    return(  
      <Admin 
        dashboard={Dashboard} 
        authProvider={authProvider} 
        dataProvider={DataProvider} 
      >
        {permissions => [
        // Restrict access to the edit and remove views to admin only

          console.log(permissions)
          ]}

          {/* <Resource 
            name="users" 
            list={UserList} 
            edit={permissions === 'admin' ? UserEdit : null} 
            create={permissions === 'admin' ? UserCreate : null} 
            icon={UserIcon}  
            />  */}
          <Resource 
            name="users" 
            list={UserList} 
            edit={UserEdit} 
            create={UserCreate} 
            icon={UserIcon}  
            /> 
        <Resource name="tags"/>
        <Resource name="user_tags" />
        <Resource name="assets" />
        <Resource name="availabilities" />
    </Admin>
    )
    
  }
}

export default App;

