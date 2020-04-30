import React, { useState } from 'react';
import './App.css';
import { findAllInRenderedTree } from 'react-dom/test-utils';

function App() {
  const [word, setWord] = useState([]);
  const [userInput, setUserInput] = useState("");

  function submit(e) {
    e.preventDefault();
    if (userInput === "") {
      window.alert("Nope sorry")
    } else {
      word.push(userInput);
      setWord(word);
      console.log(word);
      setUserInput("");
    }
  }


  return (
    <div className="App">
      <form>
        <input type="text" id="name" name="name" required value={userInput} onChange={e => setUserInput(e.target.value)}
        />
        <button onClick={submit} type="submit">Add</button>
        <button>Show</button>
      </form>
    </div>
  );
}

export default App;
