import React from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';


function Counter(props) {
            
    return (
        <div>
            <CounterOutput value={props.ctr} />
            <CounterControl label="Increment" clicked={props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
            <CounterControl label="Add 10" clicked={props.onAddCounter}  />
            <CounterControl label="Subtract 15" clicked={props.onIncrementCounter}  />
            <button onClick={() => props.onStoreResult(props.ctr)}>Store results</button>
            <ul>
                {props.storeResult.map(result => (
                    <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>{result.value}</li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResult: state.res.results,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        onDecrementCounter: () => dispatch({
            type: actionTypes.DECREMENT
        }),
        onAddCounter: () => dispatch({
            type: actionTypes.ADD,
            value: 10,
        }),
        onIncrementCounter: () => dispatch({
            type: actionTypes.SUBTRACK,
            value: 15,
        }),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULTS, result}),
        onDeleteResult: id => dispatch({type: actionTypes.DELETE_RESULTS, elId: id,})
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);