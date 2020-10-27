import React, { useContext } from 'react';
import counterContext from './CounterContext';

function Child(props) {
    
    let counterValue = useContext(counterContext);
    
    return (
    <div>
        <h2>This is Child component</h2>
        <h3>My name is {props.name}</h3>
        <h3>Counter value is: {counterValue}</h3>
    </div>
    )
}

export default Child;