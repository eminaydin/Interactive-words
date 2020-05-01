import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

const Form = (props) => {
    const [words, setWords] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [boolean, setBoolean] = useState(true);

    function submit(e) {
        e.preventDefault();
        setBoolean(true)
        setWords([...words, userInput]);
        setUserInput("");

    }

    function display(e) {
        e.preventDefault();
        if (words.length >= 3) {
            setBoolean(true)
        } else { setBoolean(false); }

        props.childValue(words)

    }


    function handler(e) {
        setUserInput(e.target.value)
    }
    return (
        <div className="form">
            <form >
                <Input placeholder='Search...' value={userInput} onChange={handler} className="input" required={true} />

                {!boolean ? (
                    <p className="error">Add at least 3 words</p>
                )
                    :
                    null
                }

                <div className="btn">
                    <Button onClick={submit}>Add</Button>
                    <Button onClick={display}>Show</Button>
                </div>

            </form>
        </div>
    );
}

export default Form;
