import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthGuardHOC from '../hoc/AuthGuard';
import Campaigns from '../components/Campaign/index';

const styles = {
  container: {
    marginBottom: '10vh'
  }
};

const Home = ({ campaigns, user }) => (
  <section style={styles.container}>
    <h1>Campaigns</h1>
    <Campaigns user={user} />
  </section>
);

const mapStateToProps = ({ campaigns, user }) => ({
  campaigns,
  user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuardHOC(Home));