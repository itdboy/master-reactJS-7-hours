const Button = () => {

  const handleClick = (a ,b) =>{
    console.log(a+b)
   // console.log("Clicked")
   //   alert("You click me")
  } ;

  return <button onClick={()=>handleClick(2,2)}>Click</button>;
};

function App() {
  return <><Button/></>;
}

export default App;
