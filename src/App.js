import logo from './logo.svg';
import './App.css';
import Counter from "./counter";

function App() {

  const maxValue = 10;


  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter maximum={maxValue} />
    </div>
  );
}

export default App;
