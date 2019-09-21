import React, { Component } from 'react'
import AdminAddUser from '../../Components/Admin/AdminAddUser'
import AdminDeleteUser from '../../Components/Admin/AdminDeleteUser'
import AdminEditUser from '../../Components/Admin/AdminEditUser'
import AdminFilterUser from '../../Components/Admin/AdminFilterUser'
import AdminUserList from '../../Components/Admin/AdminUserList'



class UserMgmt extends Component {



render() {
  return ( 
    <div>

      User Management Container
    <AdminUserList />
    <AdminAddUser />
    <AdminDeleteUser />
    <AdminEditUser />
    <AdminFilterUser />
    </div>
    )
  }
}


export default UserMgmt

















