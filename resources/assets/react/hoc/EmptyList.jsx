import React from 'react';
import 'bulma';

const EmptyList = key => ComponentWrapper => props => {
  return props[key]
    ? <p className="has-text-centered">No Campaign found in your profile</p>
    : <ComponentWrapper {...props} />;
};

export default EmptyList;