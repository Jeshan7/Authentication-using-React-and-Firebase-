import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import fire from '../../config/Firebase';

const signedInLinks = (props) => {

  const logoutHandler = () => {
    fire.auth().signOut()
    .then(() => {
      console.log("Userlogged out");
      props.history.push('/register');
    }) 
  }

  return (
    <div>
      <Button variant="outline-primary" onClick={logoutHandler}>Logout</Button> 
      <Button variant="outline-primary" >Home</Button> 
    </div>
  );    
}

export default withRouter(signedInLinks);