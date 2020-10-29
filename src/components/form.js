import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";

const Form = (props) => {
  const [words, setWords] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [boolean, setBoolean] = useState(true);

  function submit(e) {
    e.preventDefault();
    setBoolean(true);
    setWords([...words, userInput]);
    setUserInput("");
  }

  function display(e) {
    e.preventDefault();
    setBoolean(words.length >= 3 ? true : false);
    props.childValue(words);
  }

  function handler(e) {
    setUserInput(e.target.value);
  }
  return (
    <div className="form">
      <form>
        <Input
          icon="tags"
          iconPosition="left"
          label={{ tag: true, content: "Add Tag" }}
          labelPosition="right"
          placeholder="Describe yourself with one word"
          value={userInput}
          onChange={handler}
          className="input"
        />
        {!boolean ? (
          <p className="error">Add at least 3 words to see the result!</p>
        ) : null}
        <div className="btn">
          <Button onClick={submit}>Add</Button>
          <Button onClick={display}>Show</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
