import React, { useMemo, useRef, useState } from "react";

//cach4 
import useConstructor from "../../../../custom-hooks/useConstructor"

//constructor chỉ chạy duy nhất 1 lần
//cach 1 tao bien toan cuc
let isRun = false

const CreateConstructor = () => {

    const [counter, setCouter] = useState(0);

    //cach 2: tao constructor thong qua useRef
    const isRunHook = useRef(false);

    //cach 1
    if(isRun === false) {
        isRun = true;
        console.log('constructor 1')
    }

    //cach 2
    if(isRunHook.current === false) {
        isRunHook.current = true;
        console.log('constructor 2')
    }

    //cach 3 su dung useMemo
    useMemo(() => {
        console.log('constructor 3')
    }, [])

    //cach 4 sử dụng hook do mình tạo ra:
    //Tao ra Custom Hook -> useConstructor (do mình định nghĩa)
    //nhấn vào 1 function callback
    //function này chỉ được gọi 1 lần duy nhất
    //useConstructor(() => {//content})
    //viết ở file custom-hooks/useConstructor
    useConstructor(() => {
        console.log('constructor 4');
    });


    const handleClick = () => {
        setCouter(counter + 1)
    }

    return (
        <div>
            <h1>demo</h1>
            <button onClick={handleClick}>counter add</button>
            <h2>{counter}</h2>
        </div>
    )
}

export default CreateConstructor