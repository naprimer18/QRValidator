
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './form'
export const WrapperContext = React.createContext("hello");
class ValidatorWrapper extends Component {
    render() {
        console.log(this.props.errorStore);
        return (
            <WrapperContext.Provider value = {"hello"}>
                <div >
                    <Form />
                </div>
            </WrapperContext.Provider>
        );
    }
}

export default connect(
    state => ({
        errorStore: state
    }),
    dispatch => ({})
)(ValidatorWrapper);