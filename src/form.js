
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {WrapperContext} from './validatorWrapper';

class Form extends Component {
    // static contextType = WrapperContext;
    componentDidMount() {
        console.log(this.context);
    }
    componentWillMount() {
        console.log(this.context);
    }


    render() {
        console.log(this.context);
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
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