import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import AuthGuardHOC from '../hoc/AuthGuard';
const styles = {
  container: {
    marginBottom: '20vh',
  },
};

class NewCampaign extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div className="columns">
          <div className="column">
            <h1>Create Campaign</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <nav className="breadcrumb is-large is-centered has-arrow-separator" aria-label="breadcrumbs">
              <ul>
                <li><a href="#">Content</a></li>
                <li className="is-active"><a href="#">Appearance</a></li>
                <li className="is-active"><a href="#">Interaction</a></li>
                <li className="is-active"><a href="#" aria-current="page">Summary</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <article className="message">
              <div className="message-header">
                <h4>Content</h4>
              </div>
              <div className="message-body">
                <div className="columns">
                  <div className="column is-8 is-offset-2">

                    <div className="field">
                      <label>Campaign: Title *</label>
                      <p className="help">Do not enter the first zero</p>
                      <div className="control">
                        <input className="input is-large" type="text" placeholder="Title" />
                      </div>
                    </div>

                    <div className="field">
                      <label>Campaign: Size *</label>
                      <p className="help">Please select the size of your feedback campaign.</p>
                      <div className="control">

                        <div class="select is-large is-fullwidth">
                          <select>
                            <option value="" disabled selected>Select...</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="field">
                      <label>Campaign: Type *</label>
                      <p className="help">Please select the type of campaign you wish to implement.</p>
                      <div className="control">
                        <div class="select is-large is-fullwidth">
                          <select>
                            <option value="small" disabled selected>Select...</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="field">
                      <button className="button is-large is-primary">Save and Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ setting, user }) => ({
  setting,
  user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuardHOC(NewCampaign));
