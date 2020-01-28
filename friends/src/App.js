import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </div>
    </Router>
  );
}

export default App;
