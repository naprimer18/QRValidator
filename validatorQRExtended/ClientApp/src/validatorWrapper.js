
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValidatorPoint from './validatorPoint'
import { actionCreators } from './ErrorsReducer';
import { bindActionCreators } from 'redux';
import { ValidatorProvider } from "./contextValidator"

class ValidatorWrapper extends Component {
    constructor(props) {
        super(props);
        this.props.requestErrors();
    
        this.state = {
            dataError: []
        };
    }
    componentDidMount() {
        this.props.requestErrors();
        console.log("props", this.props.errorStore);
       
   
    }
    componentWillReceiveProps() {
        if (this.props.errorStore) {
             this.setState({ dataError: this.props.errorStore })
        }
       
    }



    render() {
        console.log("state", this.state.dataError)
        return (
            <ValidatorProvider value={[...this.state.dataError]}>
                    <ValidatorPoint nameValidatePoint='name#1'/>
                <ValidatorPoint nameValidatePoint='name#2' />
                <button onClick={() => { this.setState({ dataError: this.props.errorStore })}} >Submit</button>
            </ValidatorProvider>

            
            
        );
    }
}

export default connect(
    state => ({
        errorStore: state.dataRedux.errors
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ValidatorWrapper);