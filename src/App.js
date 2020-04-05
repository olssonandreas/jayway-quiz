import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import useFetch from 'hooks/fetch';

import { Quiz, Result } from 'components'

export default () => {
  const res = useFetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple", {});

  return (
    <div className="app">
      <Router>
          <Switch>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/">
              <Quiz activeGame={false} game={res.response} />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}
