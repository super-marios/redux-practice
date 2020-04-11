import React, {useState} from 'react';
import './App.css';

import AddNumber from  './components/addNumber.js';
import ShowNumber from  './components/showNumber.js';

function App() {
  const [number, setNumber] = useState(0)

  return (
    <div className="App">
      App root
      <AddNumber></AddNumber>
      <ShowNumber number={number}></ShowNumber>
    </div>
  );
}

export default App;
