
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValidatorPoint from './validatorPoint'

import { ValidatorProvider, ValidatorConsumer } from "./contextValidator"

class ValidatorWrapper extends Component {
    constructor(props) {
        super(props);

        this.returnErrorPoint = (newPointError) => {
           console.log(newPointError);
        };

        this.state = {
            returnErrorPoint: this.returnErrorPoint,
        };
    }

    render() {
        console.log(this.props.errorStore);
        return (
            <ValidatorProvider  value={this.state}>
                    <ValidatorPoint />
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