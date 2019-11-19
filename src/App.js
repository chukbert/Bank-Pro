import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import TransactionHistory from './pages/TransactionHistory';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            {/* home page */}
        </Route>
        <Route exact path='/login'>
            {/* login page */}
        </Route>
        <Route exact path='/transfer'>
            {/* transfer page */}
        </Route>
        <Route exact path='/history'>
           <TransactionHistory/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
