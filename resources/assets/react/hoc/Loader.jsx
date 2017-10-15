import React from 'react';
import Spinner from 'react-spinkit';

const Loader = key => ComponentWrapper => props => {
  return props[key] === undefined
    ? <div align="center"><Spinner name={'circle'} fadeIn={'none'} /></div>
    : <ComponentWrapper {...props} />;
};

export default Loader;