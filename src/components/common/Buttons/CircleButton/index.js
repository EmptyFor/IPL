import React, { Component } from 'react';
import './index.scss'



export default class CommonCircleButton extends Component {

    render() {
        return (
            <div className={`arch-circle-btn ${this.props.type} ${this.props.className}`} type={this.props.type}>
                {this.props.type === 'next' ? <span className={`arch-circle-btn-arrow ${this.props.type}`}></span>
                    : this.props.type === 'prev' ? <span className={`arch-circle-btn-arrow ${this.props.type}`}></span>
                        : this.props.type === 'plus' ? <span className={`arch-circle-btn-arrow ${this.props.type}`}></span> : null}
            </div>

        )
    }
}

