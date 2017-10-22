import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Switch, Route, Link, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import campaigns from "./reducers/campaignsReducer";
import user from "./reducers/userReducer";
import Login from './containers/Login';
import NewCampaign from './containers/NewCampaign';
import Home from './containers/Home';
import Campaign from './components/Campaign/index';
import Footer from './components/Footer';
import SideBar from './containers/SideBar';

const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    user,
    campaigns,
    router: routerReducer
  }),
  applyMiddleware(middleware, thunk)
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <SideBar />
        <div id="wrapper">
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/campaign'} component={NewCampaign} />
            <Route exact path={'/auth'} component={Login} />
          </Switch>
        </div>
        <Footer />
      </div>
    </ConnectedRouter >
  </Provider >,
  window.document.getElementById('app')
);