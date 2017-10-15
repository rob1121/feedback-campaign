import React from 'react';
import 'bulma';
import PropTypes from 'prop-types';

const BreadCrumbItem = ({ text, link, active }) =>
  <li className={{ 'is-active': active }}>
    {link
      ? <a href={link} aria-current="page">{text}</a>
      : <span>{text}</span>
    }
  </li>;

BreadCrumbItem.defaultProps = {
  text: null,
  active: false,
  link: null,
};

BreadCrumbItem.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  link: PropTypes.string,
};

export default BreadCrumbItem;