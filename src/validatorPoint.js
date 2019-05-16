
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ValidatorConsumer } from "./contextValidator"

class ValidatorPoint extends Component {
    render() {
        console.log(ValidatorConsumer);
        return (
            <div>
                <form>
                    <input type="text" name="name" />
                </form>
                <ValidatorConsumer >
                    {({ returnErrorPoint}) => (
                        <button onClick={returnErrorPoint}>
                            submit
                        </button>
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