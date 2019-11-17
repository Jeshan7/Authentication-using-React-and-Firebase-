import React, { Component } from 'react';
import fire from '../../config/Firebase';
import { Form, Button, Container } from 'react-bootstrap';

class Register extends Component {
  state = {
    name: null,
    email: null,
    password: null,
    repeatPassword: null    
  }  
  
  inputHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value    
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    fire.auth().createUserWithEmailAndPassword(this.state.email,  this.state.password)
      .then( (cred) => {
         console.log(cred.user.email);
      }).catch( err => {
          console.log(err);
      })
  }

  render() {
    return (
      <div>
        <Container>  
          <Form onSubmit={this.submitHandler}>
            <Form.Group>
              <Form.Control type="text" id="name" placeholder="Name" onChange={this.inputHandler}/>
            </Form.Group>

            <Form.Group>
              <Form.Control type="text" id="email" placeholder="Email" onChange={this.inputHandler}/>
            </Form.Group>
            
            <Form.Group>
              <Form.Control type="password" id="password" placeholder="Password" onChange={this.inputHandler}/>
            </Form.Group>    

            <Form.Group>
              <Form.Control type="password" id="repeatPassword" placeholder="Repeat Password" onChange={this.inputHandler}/>
            </Form.Group>    
            
            <Button type="submit" variant="outline-primary">Register</Button>

          </Form>
        </Container>
      </div>
    );    
  }    
}

export default Register;