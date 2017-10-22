import React from 'react';
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import Index from '../containers/Index';

const AuthGuardHOC = ComponentWrapper => props => {
  return props.user.isLoggedIn
    ?
    <div className="columns">
      <div className="column is-8 is-offset-2" style={{ paddingTop: 32 }}>
        <Header user={props.user} />
        <ComponentWrapper {...props} />
      </div>
    </div>
    : <Index />
};

export default AuthGuardHOC;