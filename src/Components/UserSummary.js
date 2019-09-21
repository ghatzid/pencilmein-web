import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




class UserSummary extends Component {
render() {
  return ( 
  <div>          
    <form noValidate autoComplete="off">
    <TextField
    id="textarea"
    label="Enter Summary Here"
    placeholder="Enter Summary Here"
    multiline
    margin="normal"
    variant="outlined"
  />
  <Button variant="contained" color="primary">
      Save
    </Button>
  </form>
  </div>)
}}
export default UserSummary