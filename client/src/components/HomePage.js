import React, { Component } from 'react';
// import { Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../style/HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="background">
        <div class="container">
          <h1>WeCook</h1>

          <div className="SearchBox row">
            <div className="col">
              <input id="food_input" type="text" placeholder="Search..." />
            </div>

            <div className="col">
              <Link to="/result">    
                <i class="material-icons right">send</i>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
