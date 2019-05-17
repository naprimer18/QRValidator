import React from 'react';
import { ValidatorConsumer } from '../contextValidator';

const withData = (Wrapped) => {

    return (props) => {
        return (
            <ValidatorConsumer>
                {(data) => {
                    return <Wrapped {...props} data={data}/>
                }}
            </ValidatorConsumer>
        )
    }
};

export default withData;
