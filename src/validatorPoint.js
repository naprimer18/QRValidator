
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ValidatorConsumer } from "./contextValidator"

class ValidatorPoint extends Component {
    render() {
        console.log(ValidatorConsumer);
        return (
            <div>
                <ValidatorConsumer >
                    {({ returnErrorPoint}) => (
                        <div>
                            <input type="text" name="name" />
                            <button onClick={returnErrorPoint}>
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