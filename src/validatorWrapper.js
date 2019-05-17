
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ValidatorProvider } from "./contextValidator"

class ValidatorWrapper extends Component {

    state = {
        dataError: this.props.errorStore
    };

    render() {
        return (
            <ValidatorProvider  value={this.state.dataError}>
                {this.props.children}
            </ValidatorProvider>
        );
    }
}

export default connect(
    state => ({
        errorStore: state
    }),
    dispatch => ({})
)(ValidatorWrapper);
