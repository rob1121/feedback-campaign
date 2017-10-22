import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
const styles = {
  login: {
    color: '#222'
  },
};

const Index = () => (
  <div align="center">
    <div className="columns">
      <div className="column is-11 has-text-right">
        <NavLink
          to="/auth"
        >
          <h4 style={styles.login}>
            <strong>
              Login
            </strong>
          </h4>
        </NavLink>
      </div>
    </div>




    <section className="hero is-fullheight is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Welcome to FeedbackCampaign
      </h1>
        </div>
      </div>
    </section>


    <section className="hero is-large is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Build and Publish User Feedback Widgets on Your Website
          </h1>
          <h2 className="subtitle">
            Simple to use mobile optimized feedback widgets for online marketers.
          </h2>
        </div>
      </div>
    </section>




    <section className="hero is-large is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Select from a fantastic array of feedback widgets and forms
          </h1>
          <h2 className="subtitle">
            Looking for variety? No problem. Select a customer feedback widget that suits the needs of your website.
          </h2>
        </div>
      </div>
    </section>



    <section className="hero is-large is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Build and Publish User Feedback Widgets on Your Website
          </h1>
          <h2 className="subtitle">
            Simple to use mobile optimized feedback widgets for online marketers.
          </h2>
        </div>
      </div>
    </section>
  </div>
);
export default Index;