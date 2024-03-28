import React from "react";

const Copy = () => {
  const copyHandler = () => {
    alert("Stop Stealing My Content");
  };
  return (
    <>
      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        debitis dolore ullam sint officia aliquid, corrupti eligendi recusandae
        culpa totam reprehenderit error reiciendis libero sunt voluptatum.
        Recusandae beatae nam fuga.
      </p>
    </>
  );
};

const moveHandler = () => {
    console.log("You hoverd me")
    
};

const Movie = () => {
  return (
    <>
      <p onMouseMove={moveHandler }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        recusandae ipsa perferendis animi ipsum, sint dolores maiores modi
        impedit, consequatur ut voluptate delectus voluptas. Veniam minus itaque
        vitae nam magnam?
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <Movie />

      {/* <Copy /> */}
    </>
  );
}

export default App;
