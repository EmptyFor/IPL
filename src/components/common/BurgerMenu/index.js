import React, { Component } from 'react';
import './index.scss'


export default class CommonBurgerMenu extends Component {

    state = {

    }


    // return 

    render() {
        return (
            <div className={`arch-burger-menu ${this.props.className}`}>
                <span className={`arch-burger-menu-line`}></span>
            </div>

        )
    }
}

