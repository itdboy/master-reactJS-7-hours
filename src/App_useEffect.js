import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useEffect } from "react";
//use Effect Hook

function App() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  //1. Render for the (first time)
  //2. anytime we do (side effect)
  //3. Dependency List [] =>empty array will run on first time only
  useEffect(() => {
    console.log("Hello");
    //เรียกส่วนนี้ว่า Site effect คือ เมื่อ document มีการเปลี่ยนแปลง ให้แสดงค่าใหม่
    document.title = `Increment (${value})`;
  },[value]);

  useEffect(()=>{
    async function getData(){
      const response= await fetch("https://jsonplaceholder.typicode.com/posts") ;
      const data = await response.json()
      if(data && data.length) setData(data)
    }

    getData()
  },[])

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Value</button>

      {data.map((item)=>(
        <li key={Math.random}>{item.title}</li>
      ))}
    </>
  );
}

export default App;
