import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Provider extends Component {


  render () {
    // const { token, user } = this.props;

    // if (!token) {
    //   return <Redirect to={links.login} />;
    // }

    // if (!user.id || !user.selectedContract) {
    //   return <Loader fullSized size={35} />
    // }

    return (
      <Fragment>
        { this.props.children }
      </Fragment>

    )
  }
}

export default connect(
  (state) => ({ }),
  dispatch => ({ })
)(Provider);