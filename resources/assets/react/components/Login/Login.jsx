import React from 'react';
import LoginHOC from './LoginHOC';

const Login = ({ username, password, login, setUsername, setPassword }) => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <article className="message">
              <div className="message-header">
                <p>Login</p>
              </div>
              <div className="message-body">

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      name="username"
                      className="input is-large"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      name="password"
                      className="input is-large"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="columns">
                  <div className="column has-text-right">
                    <button className="button is-large is-primary" onClick={login}>Login</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LoginHOC(Login);