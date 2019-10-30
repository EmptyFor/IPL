import React, { Component } from 'react';
import './index.scss'


export default class CommonInput extends Component {


    render() {

        return (
            <div className="arch-input-wrapp">
                <input required="required" type={this.props.type || 'text'} className={`arch-default-input`} />
                <label className="placeholder-label" >{this.props.placeholder || "placeholder"}</label>
            </div>
        )
    }
}

