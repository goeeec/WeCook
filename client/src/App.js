import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ResultPage from './components/ResultPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    this.callApi()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
    console.log(this.state.data);
  }

  callApi = async () => {
    console.log("inside callApi");
    const response = await fetch("/api/test", {
            method: 'POST',
            body: JSON.stringify({food: "Fish"}),
            credentials: 'include',
            headers: {'Content-Type' : 'application/json'}
        });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log("cp2");
    console.log(body);
    return body;
  };

  render() {
    return (
      <div className="Home">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </div>
      
    );
  }
}

export default App;
