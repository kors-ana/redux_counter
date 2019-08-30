import React, {useState} from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

export default function Counter() {
    const [state, setState] = useState({
        counter: 0
    });
    

    const counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                setState({ ...state, counter: state.counter + 1 }  )
                break;
            case 'dec':
                setState({ ...state, counter: state.counter - 1 }  )
                break;
            case 'add':
                setState({ ...state, counter: state.counter + value }  )
                break;
            case 'sub':
                setState({ ...state, counter: state.counter - value } )
                break;
            default: return state;
        }
    }
            
    return (
        <div>
            <CounterOutput value={state.counter} />
            <CounterControl label="Increment" clicked={() => counterChangedHandler( 'inc' )} />
            <CounterControl label="Decrement" clicked={() => counterChangedHandler( 'dec' )}  />
            <CounterControl label="Add 5" clicked={() => counterChangedHandler( 'add', 5 )}  />
            <CounterControl label="Subtract 5" clicked={() => counterChangedHandler( 'sub', 5 )}  />
        </div>
    );
}
