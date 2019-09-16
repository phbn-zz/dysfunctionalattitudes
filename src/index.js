import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store/index';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import main from 'screens/main';
import results from 'screens/results';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={main} exact />
        <Route path="/results" component={results}></Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
