import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import { API_USERS_CAPAIGNS } from '../../constant/routes';
import CampaignPresentation from './CampaignPrensentation';


export default class CampaignContainer extends Component {
  constructor() {
    super();

    this.state = {
      campaigns: undefined,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextState) !== JSON.stringify(this.props);
  }

  componentDidMount() {
    axios.get(API_USERS_CAPAIGNS).then(({ data }) => {
      this.setState({ campaigns: data.campaign });
    });
  }

  render() {
    return (
      <CampaignPresentation {...this.state} />
    );
  }
}

