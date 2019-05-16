
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ValidatorConsumer } from "./contextValidator"

class ValidatorPoint extends Component {
    render() {
        return (
            <div>
                <ValidatorConsumer >
                    {({ dataError}) => (
                        <div >
                            {
                                dataError.forEach((item) => {   // switch Case
                                    if(item.propertyName === this.props.nameValidatePoint && item.type === "Nice" ) {
                                        console.log("point #1 Nice")
                                    }
                                    if(item.propertyName === this.props.nameValidatePoint && item.type === "Warning" ) {
                                        console.log("point #2 Warning")
                                    }
                                })

                            }
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