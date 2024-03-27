
function App_jsx(){
    const myName = "Boy123" ;
    const multiply = (a,b) => a * b ;
    const specialClass = "not simple-class" ;



    return (
        <>
            <h1>{myName}</h1>
            <p>2 + 2  = {2+2}</p>
            <p>My Friends List : {["Alex", "John" , "Jordan"]}</p>
            <p> 2 * 2 = {multiply(2,2)}</p>
            <p className={specialClass} >This is a special class</p>


        </>
    )
}

export default App_jsx;