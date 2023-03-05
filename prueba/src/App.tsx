import './App.css'
import { UsersForm } from './pages/Form'
import { UsersList } from './pages/List';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div>
      <img src="eya.jpeg" />
      <Router>
        <Switch>
          <Route exact path="/" component={UsersForm} />
          <Route exact path="/contact" component={UsersList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
