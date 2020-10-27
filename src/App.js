import './App.css';
import Parent from './components/Parent';
import counterContext from './components/CounterContext';

function App() {
  return (
    <counterContext.Provider value = {55}>
      <div>
        <Parent name="Erass" />
      </div>
    </counterContext.Provider>
  );
}

export default App;
