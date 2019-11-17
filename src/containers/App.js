import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthNavbar from '../components/Navbar/Navbar';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from '../components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AuthNavbar/>
          <Route path="/home" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
