import './App.css';
import React from 'react';
import HomePage from "./Components/HomePage";
import HomePage2 from './Components/Homepage2';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <React.Fragment>
        Teste Header
        <br/>
        <Link to="/home/Natan" exact>HomePage Natan</Link>
        <br/>
        <Link to="/home/redirect" exact>HomePage José</Link>,
        <h2>CONTENT</h2>
        <Route path='/home/:user' component={HomePage} exact/>
        <Route path='/home/redirect' component={HomePage2} exact/>
      </React.Fragment>
    </Router>
  );
}

export default App;
