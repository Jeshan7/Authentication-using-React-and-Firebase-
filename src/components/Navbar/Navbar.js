import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import fire from '../../config/Firebase';

const authNavbar = (props) => {
  
  const logoutHandler = () => {
    fire.auth().signOut()
    .then(() => {
      console.log("Userlogged out");
      console.log(props);
    }) 
  }

  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand>
          Auth  
        </Navbar.Brand>
        <Button variant="outline-primary"><Link to="/register">Register</Link></Button>
        <Button variant="outline-primary"><Link to="/login">Login</Link></Button>
        <Button variant="outline-primary" onClick={logoutHandler}>Logout</Button>
      </Navbar>    
    </div>    
  );    
}

export default withRouter(authNavbar);