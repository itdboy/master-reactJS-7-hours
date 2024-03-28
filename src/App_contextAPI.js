import React from "react";
import ComponentC from "./ComponentC";
import { createContext } from "react";

//1. context API
//2. Creating instance of (createContext)
export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Boy";
  const age = 18;

  return (
    //3.Wrap our component into Provider Component
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
