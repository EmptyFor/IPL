import React, { Component } from 'react';
import './index.scss'



export default class RectangleBtn extends Component {

    state = {

    }

    render() {
        return (
            <button onClick={this.props.onClick} className={`arch-rectangle-btn ${this.props.className}`} >
                {this.props.text}
            </button>

        )
    }
}

