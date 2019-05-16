
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValidatorPoint from './validatorPoint'

import { ValidatorProvider } from "./contextValidator"

class ValidatorWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataError: this.props.errorStore
        };
    }
    render() {
        return (
            <ValidatorProvider  value={this.state}>
                    <ValidatorPoint nameValidatePoint='name#1'/>
                    <ValidatorPoint nameValidatePoint='name#2'/>
                    <button >Submit</button>
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