// src/components/LearningUseState.js
import React, { useState } from 'react';

function LearningUseState() {
    const [count, setCount] = useState(0);
    function add() {
        if (count < 5)
            setCount(count + 1)
    }
    function sub() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={add}>Increment </button>
            <button onClick={sub}>Decrement</button>
        </div>
    );
}

export default LearningUseState;

