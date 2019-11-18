import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import AuthContext from '../../context/authContext';

const Home = (props) => {
  const authContext = useContext(AuthContext);

  // console.log(authContext);
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            User Logged In: {authContext}
          </Card.Body>
        </Card> 
      </Container> 
    </div>
  );       
}

export default Home;