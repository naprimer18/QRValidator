import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ValidatorWrapper from './validatorWrapper';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ValidatorPoint from "./validatorPoint";

const initialState = [
    {
        type:"Nice",
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

class Test extends Component {
  render() {
      return (
          <div ref={ ref => { this.testRef = ref }} style={{'width': '500px', 'height': '100px'}} onClick={ () => this.testRef.focus()} onKeyPress={ () => console.log('test')}>
            blablabla
          </div>
      )
  }
};

const store = createStore(errorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <ValidatorWrapper>
            <div>
                <ValidatorPoint nameValidatePoint='name#1'>
                    <select>
                        <option>blablabla</option>
                        <option>blaeblaeblae</option>
                        <option>blaablaablaa</option>
                        <option>blaxblaxblax</option>
                    </select>
                </ValidatorPoint>
                <ValidatorPoint nameValidatePoint='name#2'>
                    <Test />
                </ValidatorPoint>
            </div>
        </ValidatorWrapper>
    </Provider>,
    document.getElementById('root')
);
