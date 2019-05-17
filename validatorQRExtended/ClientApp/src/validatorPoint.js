import React, { Component } from 'react';
import { ValidatorConsumer } from "./contextValidator"

export default class ValidatorPoint extends Component {
    render() {
        return (
            <div>
                <ValidatorConsumer >
                    {({ dataError}) => (
                        <div >
                      
                            {

                                console.log("point ", dataError)
                               /* dataError.forEach((item) => {
                                    if(item.propertyName === this.props.nameValidatePoint && item.type === "Nice" ) {
                                        console.log("point #1 Nice")
                                    }
                                    if(item.propertyName === this.props.nameValidatePoint && item.type === "Warning" ) {
                                        console.log("point #2 Warning")
                                    }
                                })*/
                            }
                        </div>
                    )}
                </ValidatorConsumer>
            </div>
         );
    }
}
