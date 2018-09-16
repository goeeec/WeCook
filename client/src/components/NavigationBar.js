import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../App.css';

const SearchArea = () => (
  <div className="SearchArea">
    {/* <input type="text" placeholder="Search..." />
    <button>Search</button> */}
    <Input action='Search' placeholder='Search...' />
  </div>
);

const NavigationBar = () => (
  <nav>
    <Link to="/">
        WeCook
    </Link>
    
  </nav>
);

export default NavigationBar;