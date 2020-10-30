import './App.css';
import Parent from './components/Parent';
import counterContext from './components/CounterContext';
import { useState } from 'react';

function App() {

  let countState = useState(0);
  
  return (
    <counterContext.Provider value = {countState}>
      <div>
        <Parent name="Erass" />
      </div>
    </counterContext.Provider>
  );
}

export default App;
