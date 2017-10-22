import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/Login/index';
import { setUser } from '../actions/auth';
import axios from 'axios';

const Login = ({ setUser, user }) => <LoginForm user={user} setUser={setUser} />

const mapStateToProps = ({ setting, user }) => ({
  setting,
  user
});

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
