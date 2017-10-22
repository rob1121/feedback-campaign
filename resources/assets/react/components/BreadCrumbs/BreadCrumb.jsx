import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Item from './Item';

const BreadCrumb = ({ tree }) => {
  return (
    <div>
      <br />
      <nav className="breadcrumb is-large" aria-label="breadcrumbs">
        <ul>
          {tree.map(
            (item) => <Item {...item} key={item.text} />
          )}
        </ul>
      </nav>
    </div>
  );
}

BreadCrumb.defaultProps = {
  tree: [],
};

BreadCrumb.propTypes = {
  tree: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      active: PropTypes.bool,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default BreadCrumb;