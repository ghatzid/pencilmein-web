import React, { Component } from 'react';
import { Admin, Login, Resource} from 'react-admin';
import { Route } from 'react-router-dom';
import { UserList, UserEdit, UserCreate} from './Users';
import profile from './profile';
import ProfileEdit from './profile/ProfileEdit'
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';
import DataProvider from './DataProvider';
import MyLayout from './MyLayout';

// const MyLoginPage = () => <Login backgroundImage="/background.jpg" />;

class App extends Component {
  
  render(){
    return(  
    
      <Admin 
        authProvider={authProvider} 
        dataProvider={DataProvider}
        // loginPage={MyLoginPage}
        appLayout={MyLayout}
         
        customRoutes={[
          <Route
            key="my-profile"
            path="/my-profile"
            component={profile.edit}
            // noLayout
          />
        ]}
      
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
        // <Resource name="assets" />,
        <Resource name="availabilities" />
    ]}

    </Admin>
    )
    
  }
}

export default App;

