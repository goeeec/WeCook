import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/result">
          <Input action='search' placeholder='Search...' />
        </Link>
      </div>
    );
  }
}

export default HomePage;
