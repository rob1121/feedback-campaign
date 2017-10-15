import 'bulma';
import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import setting from "./reducers/settingReducer";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Switch, Route, Link, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from "./containers/Main";
// import store from "./stores/store";
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaign/index';
import NewCampaign from './components/NewCampaign/index';

const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    setting,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

render(
  <Provider store={store}>
    <ConnectedRouter  history={history}>
      <Dashboard>
        <Main />
        <Switch>
            <Route path={'/campaigns'} component={Campaigns} />
            <Route path={'/main'} component={Main} />
            <Route path={'/'} component={NewCampaign} />
          </Switch>
        </Dashboard>

    </ConnectedRouter >
  </Provider>,
  window.document.getElementById('app')
);