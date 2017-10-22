
import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { rootUrl } from '../../config/config';
const logout = ({ logout }) => {
  let isLoggedOut = confirm("We're about to leave this page... press 'OK' to  proceed");
  if (isLoggedOut) logout();
}
const LogoutHOC = ComponentWrapper => props => {
  return localStorage.getItem('name')
    ? <ComponentWrapper logout={() => logout(props)} />
    : <NavLink
      exact={true}
      to="/auth"
      onClick={props.onClick}
    >
      Login
    </NavLink>
};

export default LogoutHOC;