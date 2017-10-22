import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import { getHeader } from '../../actions/auth';
import { campaignsUrl } from '../../config/config';
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
    axios.get(campaignsUrl(this.props.user.id), { headers: getHeader() })
      .then(({ data }) => {
        this.setState({ campaigns: data.campaign });
      });
  }

  render() {
    return (
      <div className="columns">
        <div className="column" align="center">
          <CampaignPresentation {...this.state} />
        </div>
      </div>
    );
  }
}

