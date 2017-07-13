import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, browserHistory, Switch} from 'react-router-dom';

import BasePage from './components/BasePage';
import './index.css';
import ChartPage from './components/ChartPage';


const page = <Router history={browserHistory}>
  <Switch>
    <Route exact path="/days/:days?" component={ChartPage}/>
    <Route component={BasePage}/>
  </Switch>
</Router>;


ReactDOM.render(
  page,
  document.getElementById('root'));
