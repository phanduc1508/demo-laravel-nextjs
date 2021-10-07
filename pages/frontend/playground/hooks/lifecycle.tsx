import React, { useState } from "react";

const HookLifeCycle = () => {
    const [counter, setCouter] = useState(0);
    const [visible, setVisible] = useState(true);

    return (
        <div className='container'>
            <h1>Play Ground - Life Cycle - React Hooks</h1>
            <button onClick={() => {
                setCouter(counter + 1)
            }}>Counter Add</button>
            <p>{counter}</p> 
        </div>
    )
}

export default HookLifeCycle