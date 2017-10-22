import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { loginUrl, userUrl, rootUrl } from '../../config/config';
import { clientId, clientSecret } from '../../config/env';
import { setToken, getToken, getHeader, setUser } from '../../actions/auth';
import Login from './Login';


export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'password',
      username: '',
      password: ''
    };

    this.login = this.login.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  login() {
    axios.post(loginUrl, { ...this.state }).then(({ data }) => {
      setToken(data);
      this.setUserInfo();
    });
  }

  setUserInfo() {
    axios.get(userUrl, { headers: getHeader() }).then(({ data }) => {
      this.props.setUser(data);
    });
  }

  setUsername(username) {
    this.setState(() => ({
      ...this.state,
      username: username,
    }));
  }

  setPassword(password) {
    this.setState(() => ({
      ...this.state,
      password: password,
    }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    const hasNewState = nextState !== this.state;
    const hasNewProps = nextProps !== this.props;
    return hasNewState || hasNewProps;
  }

  render() {
    return (
      <Login {...this.state}
        user={this.props.user}
        login={this.login}
        setUsername={this.setUsername}
        setPassword={this.setPassword}
      />
    )
  }
}
