
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
                    {({ returnErrorPoint}) => (
                        <div>
                            <input type="text"  ref={(input) => { this.searchErrorInput = input }} />
                            <button onClick={() => {returnErrorPoint(this.validateForm())}}>
                                submit
                            </button>
                        </div>

                    )}
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