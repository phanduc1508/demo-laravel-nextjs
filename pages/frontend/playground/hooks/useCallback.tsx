import React, { useCallback, useState } from "react";

const demoUseMemo = () => {
  
    const [counter, setCouter] = useState(0);

    const handleCreateCounter = useCallback(() => {
        setCouter(counter + 1)
    }, [counter])

    return (
        <div className='container'>
            <h1>Play Ground - Life Cycle - React Hooks </h1>
            <button onClick={() => {
                setCouter(counter + 1)
            }}>Counter Add</button>
            <p>{counter}</p> 
        </div>
    )
}

export default demoUseMemo