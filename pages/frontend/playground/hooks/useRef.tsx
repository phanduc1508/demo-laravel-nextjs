import React, {useEffect, useRef, useState } from "react";

const demoUseRef = () => {
  
    const inputEl = useRef(null);
    const inputFileEl = useRef(null);
    const handleClickMouseInput = () => {
        inputEl.current.focus();
    }

    const handleClickUploadFile= () => {
        inputFileEl.current.click();
        console.log( inputFileEl.current)
    }

    return (
        <div className='container'>
            <h1>Demo Test focus useRef </h1>
            <input type="text" />
            <button onClick={handleClickMouseInput}>Focus Input</button>

            <hr />
            <input  style={{ 
                        opacity: 0,
                        visibility: 'hidden',
                        position: 'fixed',
                        left: '-1000px'
                     }} 
             ref={inputFileEl} type="file" />
            <button onClick={handleClickUploadFile} className="upload-file">upload file</button>
        </div>
    )
}

export default demoUseRef


// export default function Form() {
//     const nameRef = React.useRef();
//     const emailRef = React.useRef();
//     const passwordRef = React.useRef();
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       const name = nameRef.current.value;
//       const email = emailRef.current.value;
//       const password = passwordRef.current.value;
  
//       console.log(name, email, password);
//     };
  
//     return (
//       <React.Fragment>
//         <label>
//           Name:
//           <input placeholder="name" type="text" ref={nameRef} />
//         </label>
//         <label>
//           Email:
//           <input placeholder="email" type="text" ref={emailRef} />
//         </label>
//         <label>
//           Password:
//           <input placeholder="password" type="text" ref={passwordRef} />
//         </label>
  
//         <hr />
  
//         <button onClick={() => nameRef.current.focus()}>Focus Name Input</button>
//         <button onClick={() => emailRef.current.focus()}>
//           Focus Email Input
//         </button>
//         <button onClick={() => passwordRef.current.focus()}>
//           Focus Password Input
//         </button>
  
//         <hr />
  
//         <button onClick={handleSubmit}>Submit</button>
//       </React.Fragment>
//     );
//   }