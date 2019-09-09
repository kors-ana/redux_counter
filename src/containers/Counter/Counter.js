import React from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index'



function Counter(props) {
            
    return (
        <div>
            <CounterOutput value={props.ctr} />
            <CounterControl label="Increment" clicked={props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
            <CounterControl label="Add 10" clicked={props.onAddCounter}  />
            <CounterControl label="Subtract 15" clicked={props.onSubtractCounter}  />
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
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResults(result)),
        onDeleteResult: id => dispatch(actionCreators.deleteResults(id))
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);