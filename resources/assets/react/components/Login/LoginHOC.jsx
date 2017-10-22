import React from 'react';
import { Redirect } from 'react-router-dom';
import { rootUrl } from '../../config/config';

const LoginHOC = ComponentWrapper => props => {
  return props.user.isLoggedIn ? (
    <Redirect to={{
      pathname: rootUrl
    }} />
  ) : (
      <ComponentWrapper {...props} />
    );
};

export default LoginHOC;