import React, { Component } from 'react';


class MainTemplate extends Component {

  render() {
    return (
      <div >
          { this.props.children }
      </div>

    );
  }
}

export default MainTemplate;