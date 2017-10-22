import React from 'react';

const EmptyList = key => ComponentWrapper => props => {
  return props[key]
    ? (
      <article className="message">
        <div className="message-header">
          <p>Campaign</p>
        </div>
        <div className="message-body">
          <p>No Campaign found in your profile</p>
        </div>
      </article>
    ) : <ComponentWrapper {...props} />;
};

export default EmptyList;