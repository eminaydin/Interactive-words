import React, { useState, useEffect } from "react";
import { Button, Label } from "semantic-ui-react";

const Reveal = (props) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index === props.words.length - 1 ? 0 : index + 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="msg-container">
      <p className="initial-text">
        I am
        <Label as="a" tag>
          <span className="item"> {props.words[index]}</span>
        </Label>
      </p>
      <Button
        labelPosition="left"
        icon="left chevron"
        content="Back"
        onClick={props.showForm}
      />
    </div>
  );
};

export default Reveal;
