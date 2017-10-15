import React from 'react';
import { isEmpty } from 'lodash';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import Loader from '../../hoc/Loader';
import EmptyList from '../../hoc/EmptyList';


const Presentation = ({ campaigns }) => campaigns.map(() => <p>hello</p>);

export default EmptyList('campaigns')(
  Loader('campaigns')(Presentation)
);