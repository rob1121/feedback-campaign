import React, { Component } from 'react';
import 'bulma';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { changeCreator } from '../actions/setting';
import Dashboard from '../components/Dashboard';
import Campaigns from '../components/Campaign/index';
import NewCampaign from '../components/NewCampaign/index';
// import BreadCrumb from '../components/BreadCrumbs/BreadCrumb';

class Home extends Component {
  render() {
    return (
      <div>
        
        {this.props.setting.creator}
        {/*    <BreadCrumb tree={[
            { text: 'Campaigns', link: null, active: true },
          ]} /> */}
        <button onClick={this.props.changeCreator}>
              change creator
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ setting }) => ({
  setting,
});

const mapDispatchToProps = dispatch => ({
  changeCreator: () => dispatch({ type: 'SET_SETTING_CREATOR', payload: 'robinson' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
