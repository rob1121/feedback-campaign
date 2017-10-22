import React from 'react';
import HeaderHOC from './HeaderHOC';

const Header = ({ name }) => (
  <div className="columns">
    <div className="column is-12 has-text-right">
      <h4>Hello, {name}</h4>
    </div>
  </div>
);


export default HeaderHOC(Header);