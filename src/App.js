import React, { useState } from 'react';
import './App.css';
import { Button, Input } from 'semantic-ui-react'
function App() {
  const [word, setWord] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [lessWordError, setLessWordError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [displayText, setDisplayText] = useState(false);
  const [emptyString, setEmptyString] = useState(false);

  function submit(e) {
    e.preventDefault();
    setShowMessage(false)
    if (userInput === "") {
      setEmptyString(true)
    } else { setEmptyString(false) }
    console.log(emptyString);

    word.push(userInput);
    setWord(word);

    setUserInput("");
    if (word.length <= 3) {
      setLessWordError(true)

    } else {
      setLessWordError(false)

    }
  }

  function display(e) {
    e.preventDefault();
    if (word.length < 3) {
      setShowMessage(true)
    } else {
      setShowMessage(false);
      setDisplayText(true)


    }
  }
  return (

    <div className="App">
      <form className="form">
        <Input placeholder='Search...' value={userInput} onChange={e => setUserInput(e.target.value)} className="input" required={true} />
        {/* <input type="text" id="name" name="name"  /> */}
        {showMessage ? (<p>Add at least 3 words</p>) :
          ("")}
        <br />
        <Button onClick={submit}>Add</Button>
        <Button onClick={display}>Show</Button>
        {displayText &&
          word.map(e => {
            return <p>{e}</p>
          })
        }
      </form>
    </div>
  );
}

export default App;
