import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
