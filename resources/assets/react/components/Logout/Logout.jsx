import React from 'react';
import LogoutHOC from './LogoutHOC';

const Logout = ({ logout }) => <a onClick={logout}>Logout</a>


export default LogoutHOC(Logout);