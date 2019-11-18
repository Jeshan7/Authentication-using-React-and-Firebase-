import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import fire from '../../config/Firebase';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const authNavbar = (props) => {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand>
          Auth  
        </Navbar.Brand>
        { props.isUser ?
           <SignedInLinks /> : <SignedOutLinks/>  
        }
      </Navbar>    
    </div>    
  );    
}

export default withRouter(authNavbar);