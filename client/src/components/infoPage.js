import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/HomePage.css";

class InfoPage extends Component{
    render() {
        return (
            <div>
                <h1>joe</h1>
                <h1>{this.props.meal}</h1>
            </div>
        )
    }
}

export default InfoPage;