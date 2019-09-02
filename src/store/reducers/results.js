import * as actionTypes from '../actions';

const initialState = {
    results: [],
}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({value: action.result, id: new Date()}),
            }
        case actionTypes.DELETE_RESULTS:
            const updatedArr = state.results.filter(result => result.id !== action.elId)
                return {
                    ...state,
                    results: updatedArr,
                }

        default: return state;
    }
    
}

export default resultsReducer;