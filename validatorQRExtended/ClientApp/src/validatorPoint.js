import React, { Component } from 'react';
import withData from './hoc-helpers';

class ValidatorPoint extends Component {

    render() {
        return (
<<<<<<< HEAD:validatorQRExtended/ClientApp/src/validatorPoint.js
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
=======
            <div onClick={ (e) => console.log(e.target)}>
                {this.props.children}
>>>>>>> d0cac28460d4b09d02f3b5d54f977ff4e357a9d2:src/validatorPoint.js
            </div>
         );
    }
}

export default withData(ValidatorPoint);
