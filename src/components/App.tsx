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
      <h1 style={{color: "lightblue"}}>
        {counter}
      </h1>
      <button className="btn btn-primary" onClick={handleAdd}>+</button>
      <button className="btn btn-primary" onClick={handleSubtract}>-</button>
    </div>
  );
}

export default App;
