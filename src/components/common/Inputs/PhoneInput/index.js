import React, { Component } from 'react';
import './index.scss'


export default class CommonPhoneInput extends Component {

    state = {
        maskValue: '(_ _ _) - _ _ _ _ - _ _ _'
    }

    phoneValidator = (e) => {
        if ((e.keyCode > 47 && e.keyCode < 59) || e.keyCode === 8) return true;
        else return e.preventDefault()
    }

    inputPhoneMask = (e) => {
        const value = e.target.value;
        const regExp = /_/
        if(this.state.maskValue.match(regExp)) {
            this.setState({maskValue:this.state.maskValue.replace(/_/, value)})
        }

        e.target.value = '';
    }

    renderPrefixes = () => {
        const { prefixes } = this.props
        if (prefixes.length > 1) {
            return <select className={`arch-phone-input-select`}>
                {
                    prefixes.map((item, index) => {
                        return <option key={index}>+{item}</option>
                    })
                }
            </select>
        } else {
            return <span className={`arch-phone-input-select-solo`}>+{prefixes[0]}</span>

        }
    }
    // return 

    render() {
        const { maskValue } = this.state;

        return (
            <>
                <div className={`arch-phone-div`}>
                    {this.renderPrefixes()}
                    <input autoFocus value={maskValue} onChange={this.inputPhoneMask} prefixes={this.props.prefixes} onKeyDown={this.phoneValidator} type={this.props.type} className={`arch-phone-input`} />
                </div>
            </>
        )
    }
}

