import React from "react";
import { Dashboard, Header, Sidebar } from 'react-adminlte-dash';
import { Switch, Route, Link } from 'react-router-dom';

const nav = () => {
  return ([
    <Header.Item href="/some/link" key="1" />
  ]);
}

const sb = () => {

  return ([

    <Sidebar.UserPanel
      name={"Rob"}
      online={true}
      href="#"
      image="data:image/jpeg;base64,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"
      key="1"
    />,
    <br key="2" />,
    <Sidebar.Menu header="NAVIGATION" key="3" >
      <ul>

        <li>
          <Link to="/"
            style={{
              fontSize: 14,
              color: '#fff',
            }}>
            <span className="icon">
              <i className="fa fa-home" />
            </span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/campaigns"
            style={{
              fontSize: 14,
              color: '#fff',
            }}>
            <span className="icon">
              <i className="fa fa-list" />
            </span>
            <span>Campaigns</span>
          </Link>
        </li>
        <li>
          <Link to="/main"
            style={{
              fontSize: 14,
              color: '#fff',
            }}>
            <span className="icon">
              <i className="fa fa-list" />
            </span>
            <span>Main</span>
          </Link>
        </li>
      </ul>
      {/* <Sidebar.Menu.Item title="Campaigns">
      <Sidebar.Menu.Item title="List" href="/campaign" active={true} />
      <Sidebar.Menu.Item title="Create Campaign" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item title="Logout" /> */}
    </Sidebar.Menu>
  ]);
}

const App = ({ children }) => (
  <Dashboard
    sidebarChildren={sb()}
    navbarChildren={nav()}
    theme="skin-blue"
    logoLg={<strong>FeedBackCampaign</strong>}
    logoSm={<strong>FBC</strong>}
    logoHref="/campaign"
  >
    <div className="columns">
      <div className="column">
        {children}
      </div>
    </div>
  </Dashboard >
);

export default App;