import './App.css';
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter+1);
  }

  const handleSubtract = () => {
    setCounter(counter-1);
  }
  return (
    <div className="App">
      <h1>
        {counter}
      </h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
    </div>
  );
}

export default App;
