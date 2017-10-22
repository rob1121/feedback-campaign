import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from '../components/Logout/Logout.jsx';
import { destroyToken } from '../actions/auth';

var styles = {
  activeLink: {
    color: '#fff',
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: '#fff'
  }
}

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };

    this.hideSideBar = this.hideSideBar.bind(this);
  }

  /**
   * hide side bar
   * 
   * @memberof SideBar
   */
  hideSideBar() {
    this.setState(() => ({ isOpen: false }));
  }

  render() {
    const { user } = this.props;
    return (
      <div>

        <Menu
          isOpen={this.state.isOpen}
          styles={styles}
          pageWrapId={"wrapper"}
        >
          <NavLink
            onClick={this.hideSideBar}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={this.hideSideBar}
            to="/campaign"
            style={{ display: (user.isLoggedIn ? 'block' : 'none') }}
          >
            New Campaign
          </NavLink>


          <hr />
          <Logout
            onClick={this.hideSideBar}
            logout={this.props.logout}
          />
        </Menu >
      </div >
    );
  }
}

const mapStateToProps = ({ setting, user }) => ({
  setting,
  user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(destroyToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);