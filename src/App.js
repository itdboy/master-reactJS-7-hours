import React from "react";
import useFetch from "./useFetch";

function App() {
  const [data] = useFetch("http://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default App;
