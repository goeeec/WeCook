import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="/" class="brand-logo center">
              WeCook
            </a>
            <ul class="right hide-on-med-and-down">

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;