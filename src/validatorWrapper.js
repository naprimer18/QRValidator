
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './form'

import { ValidatorProvider, ValidatorConsumer } from "./contextValidator"

class ValidatorWrapper extends Component {
    render() {
        console.log(this.props.errorStore);
        return (
            <ValidatorProvider value = {"hello"}>
                <div >
                    <Form />
                </div>
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