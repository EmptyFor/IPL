import React, { Component, Fragment } from 'react';
import './index.scss'


export default class CommonDrawer extends Component {

    state = {
        visible: true,
        left: '0%',
        opacity: '1',
        bgIndex: '0'
    }

    showAndCloseDrawer = () => {
        const { visible } = this.state
        return visible ? this.setState({ visible: false, opacity: '0', left: '-18%', bgIndex: '-9999' }) : this.setState({ visible: true, opacity: '1', left: '0', bgIndex: '0' })
    }


    // return 

    render() {
        const { visible } = this.state

        console.log(this.state);
        return (
            <>
                <button onClick={this.showAndCloseDrawer}>H</button>
                <div className={`arch-drawer`} style={{ left: this.state.left }}>
                    <div className={`arch-drawer-title`}>Head</div>
                    <div className={`arch-drawer-content`}>Content</div>
                    <div className={`arch-drawer-footer`}>Footer</div>
                </div>

                <div className={`arch-dark-bg`} style={{ opacity: this.state.opacity, zIndex: this.state.bgIndex }} onClick={this.showAndCloseDrawer}></div>
            </>
        )
    }
}

