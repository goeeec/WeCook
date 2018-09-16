import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Result extends Component {
  render() {
    return (
      <div>
        Food: {this.props.name}
      </div>
    );
  }
}

class ResultPage extends Component {
  render() {
    return (
      <div>
        Result Page
        <div>
          {this.props.results.map((content, i) => {
            return (
              <Result name={content} index={i} key={i} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ResultPage;