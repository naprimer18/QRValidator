import React, { Component } from 'react';
import withData from './hoc-helpers';

class ValidatorPoint extends Component {

    render() {
        return (
            <div onClick={ (e) => console.log(e.target)}>
                {this.props.children}
            </div>
         );
    }
}

export default withData(ValidatorPoint);
