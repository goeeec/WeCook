import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <div className="SearchBox row">
                  <div className="col">
                  <input id="food_input" type="text" placeholder="Search..." />
                  </div>
              </div>
          </ul>
            <div className="col">
                 <Link to="/result">    
                    <i onClick={this.searchHandler} class="material-icons right">send</i>
                </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;