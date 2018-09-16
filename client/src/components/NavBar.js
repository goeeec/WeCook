import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              WeCook
            </a>
            <ul className="right hide-on-med-and-down">

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;