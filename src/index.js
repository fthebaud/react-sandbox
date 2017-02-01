import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// css
import './index.css';

// components
import App from './components/App';
import Coucou from './components/Coucou';
import About from './components/About';
import UrlParams from './components/UrlParams';
import Query from './components/Query';

// a few lightweigth components (we are just rendering HTML)
const home = () => (
  <div>
    HOME !!
  </div>
);

const notFound = () => (
  <div>
    not found
  </div>
);

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={home}/>
      <Route path="/coucou" component={Coucou}/>
      <Route path="/about" component={About}/>
      <Route path="/query" component={Query}/>
      <Route path="/urlParams/:level1/:level2" component={UrlParams}/>
      <Route path="*" component={notFound}/>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
