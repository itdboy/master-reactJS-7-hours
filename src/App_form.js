import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You type ${username}`);
    setUsername("");
  };

  return (
    <>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
