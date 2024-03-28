import React from "react";
import { useRef } from "react";

// useRef
function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    // console.log(inputElement)
  
    inputElement.current.focus();
    inputElement.current.value="Boy"
};

  return (
    <>
      <input type="text" ref={inputElement}/>
      <button onClick={() => focusInput()}>Focus & Write Boy</button>
    </>
  );
}

export default App;
