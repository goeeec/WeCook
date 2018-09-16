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
            body: JSON.stringify({food: "Beef"}),
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
    return <div className="Home">
        {/* <h1>COOK</h1> */}
        {/* <div className="navbar-fixed">
          <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo center">
                WeCook
              </a>
              <ul class="right hide-on-med-and-down">
                
              </ul>
            </div>
          </nav>
        </div>

        <div class="row">
          {this.state.data.map((meal, key) => (
            <div class="col s12 m4 l3 cardsDisplay">
              <div class="card hoverable">
                <div class="card-image">
                  <img src={meal.image} />
                  <span class="card-title">{meal.name}</span>
                </div>
                <div class="card-content">
                  <p>{meal.category}</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </div>;
  }
}

export default App;
