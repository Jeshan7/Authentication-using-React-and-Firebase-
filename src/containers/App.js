import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../config/Firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthNavbar from '../components/Navbar/Navbar';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from '../components/Home/Home';
import AuthContext from '../context/authContext';

class App extends Component {
  state = {
    user: {},
    userEmail: null,
    validUser: false
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged( user => {
      if(user) {
        this.setState({ user: user, validUser: true, userEmail: user.email});
        console.log(user.email);
      } else {
        this.setState({ user: null, userEmail: null, validUser: false });
      }
    })

  } 
  
  loginHandler = () => {
    console.log("hello");
    
  }
  render() {
    return (
      <AuthContext.Provider value={{ userEmail: this.state.user.email, login: this.loginHandler }}>
        <BrowserRouter>
          <div className="App">
            {/* <AuthContext.Provider value={{ userEmail: this.state.userEmail}}>  */}
              <AuthNavbar isUser={this.state.validUser}/>
              <Route path="/home" exact component={Home}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
            {/* </AuthContext.Provider>  */}
          </div>
        </BrowserRouter>
      </AuthContext.Provider>  
    );
  }
}

export default App;
