import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import fire from '../../config/Firebase';

class Login extends Component {
  state = {
    email: null,
    password: null    
  }
  
  inputHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value    
    })
    // console.log(this.state);
  }

  submitHandler = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then( (cred) => {
    //   console.log(this.props);
      this.props.history.push("/home");
    })   
  }

  render() {
    return (
      <div>
        <Container>  
          <Form onSubmit={this.submitHandler}>
            <Form.Group >
              <Form.Control type="text" id="email" placeholder="Email" onChange={this.inputHandler}/>
            </Form.Group>

            <Form.Group>
              <Form.Control type="password" id="password" placeholder="Password" onChange={this.inputHandler}/>
            </Form.Group>     
            
            <Button type="submit" variant="outline-primary">Login</Button>
        
          </Form>
        </Container>
      </div>
    );    
  }    
}

export default Login;