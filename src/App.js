import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './Containers/HomePage';
import AboutPage from './Containers/AboutPage';
import RegistrationPage from './Containers/RegistrationPage';
import LoginPage from './Containers/LoginPage';
import PageNotFound from './Containers/PageNotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route  path="/about" component={AboutPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />        
      </Router>
    </div>
  );
}

export default App;
