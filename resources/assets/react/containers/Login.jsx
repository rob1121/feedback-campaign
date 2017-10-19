import React, { Component } from 'react';
import axios from 'axios';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };

    this.getAccessToken = this.getAccessToken.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  getAccessToken() {
    let data = {
      client_id: 2,
      client_secret: 'fXAXwYnDsPTxQ0yzMOhyQhGuIZ4VMaZRrPAFsPti',
      grant_type: 'password',
      username: this.state.username,
      password: this.state.password,
    };

    axios.post('/oauth/token', { ...data }).then((data) => console.log(data));
  }

  setUsername(e) {
    this.setState(() => ({
      ...this.state,
      username: e,
    }));
  }

  setPassword(e) {
    this.setState(() => ({
      ...this.state,
      password: e,
    }));
  }

  render() {
    const { username, password } = this.state;

    return (
      <h1 align="center">
        <input type="text" name="username" value={username} onChange={(e) => this.setUsername(e.target.value)} />
        <input type="password" name="password" value={password} onChange={(e) => this.setPassword(e.target.value)} />
        <button onClick={this.getAccessToken}>Login</button>
      </h1>
    );
  }
}
