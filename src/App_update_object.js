import React from "react";
import { useState } from "react";
// update object value in state

function App() {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    rating: 7,
  });

  const handleClick = () => {
    //การที่จะแก้ไข object จะต้องมีทำการ clone ก่อนเสมอ 
    //เมื่อทำการ clone แล้วก็สามารถเปลี่ยนแปลง ค่าที่ต้องการตามชื่อของแต่ล่ะ item ตามตัวอย่าง
    //const copyMovie = { ...movie, rating: 5 };
    //setMovie(copyMovie)
  
    //เขียนแบบย่อ
    setMovie({...movie, rating: 6})
};

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.rating}</p>
      <button onClick={handleClick}>Change Rating</button>
    </>
  );
}

export default App;
