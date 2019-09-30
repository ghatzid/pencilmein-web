// in src/App.js
import React, { Component } from 'react';
import { Admin, Resource} from 'react-admin';
import { Route } from 'react-router-dom';
import { UserList, UserEdit, UserCreate} from './Users';
import profile from './profile';
import ProfileEdit from './profile/ProfileEdit'
// import { TagList, TagEdit, TagCreate, TagFilter} from './Tags';
import UserIcon from '@material-ui/icons/Group';
// import Dashboard from './Dashboard';
import authProvider from './authProvider';
import DataProvider from './DataProvider';
// import { minLength } from 'ra-core';
// import simpleRestProvider from 'ra-data-simple-rest';
import MyLayout from './MyLayout';
// import jsonServerProvider from 'ra-data-json-server';


// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');




class App extends Component {
  
  render(){
    return(  
    
      <Admin 
        authProvider={authProvider} 
        dataProvider={DataProvider}
         
        customRoutes={[
          <Route
            key="my-profile"
            path="/my-profile"
            component={profile.edit}
            // noLayout
          />
        ]}
        // appLayout={MyLayout}
      >
    


    {permissions => [
        // Restrict access to the edit and remove views to admin only
        permissions === 'admin' ?
        <Resource
          name="users" 
          list={UserList} 
          edit={UserEdit} 
          create={UserCreate} 
          icon={UserIcon}  
        /> 
        : null ,

        permissions === 'user' ? 
        <Resource 
          name="profile"
          list={ProfileEdit} 
     
        />
        : null ,


        <Resource name="tags"/>,
        <Resource name="user_tags" />,
        <Resource name="assets" />,
        <Resource name="availabilities" />
    ]}

    </Admin>
    )
    
  }
}

export default App;

