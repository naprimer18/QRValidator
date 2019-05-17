
const initialState = [] ;
const newArr = [];

export const actionCreators = {

    requestErrors: () => async (dispatch) => {
        const url = `/errors`;
        const response = await fetch(url);
        const errors = await response.json();
        dispatch({ type: 'RECEIVE', errors });
    },

    onChangeErrors: errors => (dispatch) => {
        dispatch({ type: 'ADD', errors });
    }
};

export const reducer = (state, action) => {

    state = state || initialState;
    switch (action.type) {
        case 'RECEIVE':
            return {
                ...state,
                errors: action.errors
            }
        case 'ADD':
            newArr.push({ newErrors: action.name });
            return {
                ...state,
                newArr
            }
    }
    return state;
};
