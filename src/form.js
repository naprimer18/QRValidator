
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ValidatorConsumer } from "./contextValidator"

class Form extends Component {
    render() {
        console.log(ValidatorConsumer);
        return (
            <div>
                <ValidatorConsumer>{context => <p>{context}</p>}</ValidatorConsumer>
            </div>
    );
    }
    }

    export default connect(
    state => ({
        errorStore: state
    }),
    dispatch => ({})
    )(Form);