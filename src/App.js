import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Homepage from "./pages/homepage/homepage.component";

const App = () => {
  return (
    <Switch>
      <Route exact path='/home' component={Homepage} />
    </Switch>
  );
}

export default App;
