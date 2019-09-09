import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';


const initialState = {
    results: [],
}

const deleteResult = (state, action) => {
    const updatedArr = state.results.filter(result => result.id !== action.elId);
    return updateObject(state, {results: updatedArr});

}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.STORE_RESULTS:
            return updateObject(state, {results: state.results.concat({value: action.result, id: new Date()})});
            
        case actionTypes.DELETE_RESULTS:
            return deleteResult(state, action)

        default: return state;
    }
    
}

export default resultsReducer;