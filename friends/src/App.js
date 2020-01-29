import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Home from './components/Home';
import Nav from "./components/Nav";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import EditFriend from './components/EditFriend';

function App() {
  return (
    <Router>
      <div style={{background: 'grey', textAlign: 'center'}}>
        <Nav />
        {/* <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/friends' component={FriendsList} /> */}
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <PrivateRoute path="/add-friend" component={AddFriend} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute exact path="/edit-friend:friendId" component={EditFriend} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
