import React, { useState, useEffect } from 'react';
import { Message } from 'semantic-ui-react'

const Reveal = (props) => {
    const [index, setIndex] = useState(0);



    useEffect(() => {
        const timer = setInterval(() => {

            setIndex(index === props.words.length - 1 ? 0 : index + 1)

        }, 1000);

        // clearing interval
        return () => clearInterval(timer);
    });


    return (
        <div className="msg-container">
            <Message className="msg">


                <p>Hello <span> {props.words[index]}</span></p>
            </Message>


            <button onClick={props.showForm}> delete</button>
        </div>
    );
}

export default Reveal;
