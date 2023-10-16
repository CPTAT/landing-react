import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact /> {/* Adjust the path for Home */}
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/wakemydyno.txt" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;