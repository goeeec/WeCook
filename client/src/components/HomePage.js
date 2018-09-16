import React, { Component } from 'react';
//import { Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  searchHandler = () => {
    let newTarget = document.getElementById('target').value;
    this.props.updateTarget({ food: newTarget });
    console.log('finished calling props function with: ' + newTarget);
  }

  render() {
    return (
      <div>
        <input type="text" id="target" placeholder="Search..." />
        <Link to='/result'>
          <button onClick={this.searchHandler}>Search</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;