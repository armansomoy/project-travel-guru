import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import { Button } from 'react-bootstrap';
import Hotels from './components/Hotels/Hotels';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';




export const UserContext = createContext();







function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
      <Switch>
          <Route path="/home">
          <Body></Body>
          </Route>
          <Route path="/booking">
          <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/hotel">
            <Hotels></Hotels>
          </PrivateRoute>
          <Route exact path="/">
            <Body></Body>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
