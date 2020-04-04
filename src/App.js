import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Quiz, Result } from 'components'

export default () => {
  return (
    <Router>
      <h1>Technical Test for Jayway - Quiz</h1>
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Quiz />
          </Route>
        </Switch>
    </Router>
  );
}
