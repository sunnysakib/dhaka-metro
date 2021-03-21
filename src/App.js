import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './component/Home/Home'
import Header from './component/Header/Header'
import Destination from './component/Destination/Destination';
import Login from './component/Login/Login';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './component/Login/PrivateRoute';
import NotFound from './component/NotFound/NotFound';

export const userContext = createContext();

function App() {
 
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router className = 'app'>
      <Header></Header>
      <Switch>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
