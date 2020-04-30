import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState([]);
  const [userInput, setUserInput] = useState("");

  function submit(e) {
    e.preventDefault();
    word.push(userInput)
    setWord(word)
    console.log(word);
    setUserInput("")
  }


  return (
    <div className="App">
      <form>
        <input type="text" id="name" name="name" required value={userInput} onChange={e => setUserInput(e.target.value)}
        />
        <button onClick={submit}>Add</button>
        <button>Show</button>
      </form>
    </div>
  );
}

export default App;
