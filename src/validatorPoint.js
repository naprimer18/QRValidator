
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ValidatorConsumer } from "./contextValidator"

class ValidatorPoint extends Component {
    validateForm = () => {
        if(this.searchErrorInput.value == "") {
            return false
        }
        return true
    }

    render() {
        console.log(ValidatorConsumer);

        return (
            <div>
                <ValidatorConsumer >
                    {
                        ({ returnErrorPoint}) => {
                            console.log('nice');
                            return this.props.children;
                        }
                    }
                </ValidatorConsumer>
            </div>
         );
    }
}

    export default connect(
    state => ({
        errorStore: state
    }),
    dispatch => ({})
    )(ValidatorPoint);
