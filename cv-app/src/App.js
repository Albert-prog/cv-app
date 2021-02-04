import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const clear = () => {setText('')}


  return (
    <div className="App">
      <button className="Btn" onClick={clear}>Reset</button>
      <div className="flexContainer">
      <textarea className="tile" onChange={e => setText(e.target.value)}></textarea>
      <div className="tile">{text}</div>
      </div>
    </div>
  );
}

export default App;
