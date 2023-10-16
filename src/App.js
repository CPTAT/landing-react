import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/landing-react" component={Home} exact/>
        <Route path="/signin" component={SigninPage} exact/>
        <Route path="/wakemydyno.txt" component={SigninPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
