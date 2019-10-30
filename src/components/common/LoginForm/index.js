import React, { Component } from 'react';
import './index.scss'
import CommonInput from '../Inputs/Default';
import RectangleBtn from '../Buttons/RectangleBtn';



export default class LoginForm extends Component {


    render() {
        return (
            <div className={`arch-login-form ${this.props.className}`} >
                <form className="login-form">
                    <h3 className="login-header">Log in</h3>
                    <CommonInput placeholder="Name" />
                    <CommonInput placeholder="Password" type="password" />
                    <RectangleBtn text="Log In" className='login-form-btn' />
                    <div className="login-links">
                        <span>Forgot your password?</span>
                        <span>Don't have an account? Registration!</span>
                    </div>

                </form>
            </div>

        )
    }
}

