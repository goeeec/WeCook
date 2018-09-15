import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ResultPage from './components/ResultPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '22'
    };
  }

  componentDidMount() {
    console.log('inside componentDidMount');
    this.callApi()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
    console.log(this.state.data);
  }

  callApi = async () => {
    console.log('inside callApi');
    const response = await fetch('/api/test');
    const body = await response.json();
    
    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log('cp2');
    console.log(body);
    return body;
  };

  render() {
    return (
      <div className="Home">
        <h1>COOK</h1>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
