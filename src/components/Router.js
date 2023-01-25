import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './Login';
import ToDo from './ToDo';
import Images from './Images';
import Journal from './Journal';

function RouterComponent() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/todo">To-Do</Link>
            </li>
            <li>
              <Link to="/images">Images</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/todo">
            <ToDo />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/journal">
            <Journal />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default RouterComponent;