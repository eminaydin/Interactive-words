import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState();
  const [showMessage, setShowMessage] = useState();
  const [displayText, setDisplayText] = useState(false);

  function submit(e) {
    e.preventDefault();


    if (word.length <= 3) {
      setError(true)
      setShowMessage(false)
    } else { setError(false) }
    word.push(userInput);
    setWord(word);
    console.log(word[0]);
    console.log(word);
    console.log(error);
    setUserInput("");
  }

  function display(e) {
    e.preventDefault();
    if (word.length < 3) {
      setShowMessage(true)
      console.log(showMessage);
    } else {
      setShowMessage(false);
      setDisplayText(true)
      console.log(showMessage)

    }
  }
  return (
    <div className="App">
      <form>
        <input type="text" id="name" name="name" value={userInput} onChange={e => setUserInput(e.target.value)} />
        {showMessage ? (<p>Add at least 3 words</p>) :
          ("")}
        <button onClick={submit} type="submit">Add</button>
        <button onClick={display}>Show</button>
        {displayText ?
          (
            <p>{word[0]} sdfsdfsd</p>
          )

          :
          (
            ""
          )}
      </form>
    </div>
  );
}

export default App;
