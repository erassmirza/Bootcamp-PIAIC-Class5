import { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child1 = () => {
    
    let [state, setState] = useReducer(CounterReducer,0);

    return(
        <div>
            <h2>This is a second child using Counter Reducer</h2>
            <h3>Value of reducer state is: {state}</h3>
            <button onClick = {() => setState('INCREMENT')}>Increment Reducer</button>
            <button onClick = {() => setState('DECREMENT')}>Decrement Reducer</button>
        </div>
    )
}

export default Child1;