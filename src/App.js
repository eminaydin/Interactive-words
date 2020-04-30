import React, { useState } from 'react';
import './App.css';

function App() {
  const [words, setWords] = useState("");

  function submit(e) {
    console.log(words);


  }


  return (
    <div className="App">
      <form>
        <input type="text" id="name" name="name" required value={words} onChange={(e) => { setWords(e.target.value) }}
        />
        <button onClick={submit}>Add</button>
        <button>Show</button>
      </form>
    </div>
  );
}

export default App;
