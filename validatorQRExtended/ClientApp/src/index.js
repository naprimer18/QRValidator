import React from 'react';
import ReactDOM from 'react-dom';
import ValidatorWrapper from './validatorWrapper';
import { Provider } from 'react-redux'
import configureStore from './configurateStore';

const initialState = window.initialReduxState;
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <ValidatorWrapper />
    </Provider>,
    document.getElementById('root')
);
