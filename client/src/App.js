import React, { Component } from 'react';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cook</h1>
        </header>
        <p>
          Testing backend connectivity: {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;
