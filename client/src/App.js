import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ResultPage from './components/ResultPage';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: { food: '' },
      results: []
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    this.callApi(this.state.target)
      .then(res => {
        this.setState({ results: res.express });
        console.log(res.express);
      })
      .catch(err => console.log(err));
    console.log(this.state.results);
  }

  callApi = async () => {
    console.log("inside callApi");
    const response = await fetch("/api/test", {
            method: 'POST',
            body: JSON.stringify(this.state.target),
            credentials: 'include',
            headers: {'Content-Type' : 'application/json'}
        });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    this.setState({
      results: body.express
    });
  };

  handleSearch = (newTarget) => {
    this.setState({
      target: newTarget
    }, this.callApi);
  };

  renderResultPage = () => {
    return(
      <ResultPage results={this.state.results} />
    );
  }

  render() {
    return <div className="Home">
        <Switch>
          <Route exact path="/" render={() => <HomePage updateTarget={this.handleSearch} />} />
          <Route path="/result" render={this.renderResultPage} />
          <Route path="/navbar" render={() => <NavBar updateTarget2={this.handleSearch} />} />
        </Switch>
      </div>;
  }
}

export default withRouter(App);
