import React from 'react';
import { isEmpty } from 'lodash';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import Loader from '../../hoc/Loader';
import EmptyList from '../../hoc/EmptyList';


const Presentation = ({ campaigns }) => (
  <div>
    campaigns.map((campaign) => (
      <article className="message" key={campaign.id}>
      <div className="message-header">
        <p>Campaign</p>
      </div>
      <div className="message-body">
        <p>Campaign</p>
      </div>
    </article>
    )
  </div>
);

export default EmptyList('campaigns')(
  Loader('campaigns')(Presentation)
);