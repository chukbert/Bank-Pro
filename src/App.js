import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import TransactionHistory from './pages/TransactionHistory';
import Transfer from './pages/Transfer';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            {/* home page */}
        </Route>
        <Route exact path='/login'>
            <Login/>
        </Route>
        <Route exact path='/transfer'>
            <Transfer />
        </Route>
        <Route exact path='/history'>
           <TransactionHistory/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
