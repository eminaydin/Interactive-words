import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Reveal from "./components/reveal";

function App() {
  const [words, setWords] = useState([]);
  const [hasThreeWords, setHasThreeWords] = useState(false);

  function childValue(words) {
    setWords(words);
    setHasThreeWords(words.length >= 3 ? true : false);
  }

  function showForm() {
    setWords();
    setHasThreeWords(false);
  }
  return (
    <div className="App">
      {hasThreeWords ? (
        <Reveal words={words} showForm={showForm} />
      ) : (
        <Form childValue={childValue} />
      )}
    </div>
  );
}

export default App;
