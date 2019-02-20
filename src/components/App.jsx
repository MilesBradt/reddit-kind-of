import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Body from './Body';


function App() {



  return (
    <React.Fragment>
    <style jsx global>{`
        body {
          background-color: #313131;
        }
      `}
      </style>

      <Header/>
      <Body/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
