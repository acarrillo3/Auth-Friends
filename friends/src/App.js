import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/friends' component={FriendsList} />
    </div>
    </Router>
  );
}

export default App;
