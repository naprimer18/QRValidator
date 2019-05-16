import React from 'react';
import ReactDOM from 'react-dom';
import ValidatorWrapper from './validatorWrapper';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = [
    {
        type:"Error",
        message:"bliaa",
        propertyName:"name#1"
    },
    {
        type:"Warning",
        message:"bliaa",
        propertyName:"name#2"
    },
    {
        type:"Critical Error",
        message:"bliaa",
        propertyName:"name#2"
    }
];

function errorReducer(state = initialState, action) {
    return state;
}

const store = createStore(errorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <ValidatorWrapper />
    </Provider>,
    document.getElementById('root')
);
