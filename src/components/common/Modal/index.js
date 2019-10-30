import React, { Component, Fragment } from 'react';
import './index.scss'
import ReactangleBtn from '../Buttons/RectangleBtn';


export default class Modal extends Component {

    state = {
        isOpen: this.props.isOpen || true
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        const { isOpen } = this.state;

        return (
            <>
                {
                    isOpen ? <Fragment>
                        < div isOpen={this.props.isOpen} className={`arch-modal ${this.props.className}`}>
                            <span className="modal-header">{this.props.modal_head_text || `Modal`}<span className="modal-close-symbol" onClick={this.closeModal}>&#10006;</span></span>
                            <span className="modal-content">{this.props.modal_content || `Content`} </span>
                            <span className="modal-footer">
                                {/* {this.props.modal_footer || `Footer`} */}
                                <ReactangleBtn text="Yes" />
                                <ReactangleBtn text="No" />
                            </span>
                        </div >
                        <div className="modal-bg"></div>

                    </Fragment > : null}
            </>
        )
    }
}

