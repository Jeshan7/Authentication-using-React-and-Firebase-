import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const signedOutLinks = () => {
  return (
    <div>
      <Button variant="outline-primary"><Link to="/register">Register</Link></Button>
      <Button variant="outline-primary"><Link to="/login">Login</Link></Button>   
    </div>
  );    
}

export default signedOutLinks;