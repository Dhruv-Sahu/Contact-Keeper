import React,{Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/layout/pages/Home';
import About from './components/layout/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

const  App = () => {
  return (
    <AuthState>
      <ContactState>
      <Router>
      <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path= '/' component={Home} />
          <Route exact path= '/about' component={About} />
          <Route exact path= '/register' component={Register} />
          <Route exact path= '/login' component={Login} />
        </Switch>
      </div>
    </Fragment>
    </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
