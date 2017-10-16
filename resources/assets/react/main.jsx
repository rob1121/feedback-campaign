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
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaign/index';
import NewCampaign from './components/NewCampaign/index';
import Index from './containers/Index';
import SideBar from './components/SideBar';

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
    <ConnectedRouter history={history}>
      <div>
        <SideBar />
        <div className="columns">
          <div className="column is-8 is-offset-2">

            <div id="wrapper">
              <Switch>
                <Route path={'/'} component={Index} />
              </Switch>
            </div>
          </div>
        </div>
      </div>

    </ConnectedRouter >
  </Provider>,
  window.document.getElementById('app')
);