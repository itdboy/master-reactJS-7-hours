import React from "react";
import { useState } from "react";

const ChangeName = () => {
  const [username, setUsername] = useState("Unknow");

  const actionName = () => {
    setUsername("Boy");
  };

  return (
    <>
      <>
        <h1>{username}</h1>
        <button onClick={actionName}>ChangeName</button>
      </>
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

function App() {
  const [friends, setFriends] = useState(["Alex", "John"]);

  const addOne = () => {
    //ทำการ clone friends แล้วเพิ่ม ค่า Boy ลงใน clone
    setFriends([...friends, "Boy"])
  };
  const removeOne = () => {
    // function map จะเท่ากับ clone ไว้ก่อนแล้วจะทำการเปรียบเทียบ
    // ทำการเปรียบเทียบ ถ้า f ไม่เท่ากับ John ให้ลบออก
    setFriends(friends.filter((f)=>f!=="John"))
  };
  const updateOne = () => {
    // function map จะเท่ากับ clone ไว้ก่อนแล้วจะทำการเปรียบเทียบ
    //ถ้าเรา map แล้ว f = เท่ากับ Alex ให้แก้ไขเป็น Alex Bye
    setFriends(friends.map((f)=>f==="Alex"?"Alex Bye": f))
  };

  return (
    <>
      <Counter />;
      <ChangeName />
      <br />
      {friends.map((f) => (
        <li key={Math.random}>{f}</li>
      ))}
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </>
  );
}

export default App;
