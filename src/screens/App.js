import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route path="/" name="Home" render={(props) => <Home {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}
