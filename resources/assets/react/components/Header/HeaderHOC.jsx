import React from 'react';
import { NavLink } from 'react-router-dom';


const HeaderHOC = ComponentWrapper => props => {
  return props.user.name
    ? <ComponentWrapper name={props.user.name} />
    : <NavLink
      to="/auth"
    >
      Login
    </NavLink>;
};

export default HeaderHOC;