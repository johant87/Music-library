import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PageNotFound from './PageNotFound';



ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={App}>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
