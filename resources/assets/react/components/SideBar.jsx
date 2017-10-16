import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { Switch, Route, Link } from 'react-router-dom';
var styles = {
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
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }

  render() {
    return (
      <Menu styles={styles} pageWrapId={"wrapper"}>

        <Link to="/">Home</Link>
        <Link to="/campaigns">Campaigns</Link>
      </Menu>
    );
  }
}