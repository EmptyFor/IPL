import React, { Component } from 'react';
import LoginForm from './common/LoginForm';

import './App.scss'

export default class App extends Component {


  render() {
    // TODO: add app global messages here with other global things

    return (
      // <div className="wrapp">
      //   {this.props.children}
      // </div>

      <div className="wrapp">
       <LoginForm />
      </div>
    )
  }
}

