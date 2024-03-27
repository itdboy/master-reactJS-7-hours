// Sample 1
// function App() {
//  const numbers = [1,2,3,4,5] ;


//  return (
//    <>
//      {numbers.map((number) => (
//        <ul key={Math.random() * 10}>
//          <li>{number}</li>
//        </ul>
//      ))}
//    </>
//  );


function App_list(){
    const userInfo = [
      { username: "Boy1", email: "boy1@gmail.com", location: "UK" },
      { username: "Boy2", email: "boy2@gmail.com", location: "USA" },
      { username: "Boy3", email: "boy3@gmail.com", location: "TH" },
    ];

    return (
        <>
            {
                userInfo.map(user => (
                    <ul key={Math.random() * 10}>
                        <li>{user.username} </li>
                        <li>{user.email} </li>
                        <li>{user.location} </li>
                    </ul>
                ))
            }
        </>
    )
}
 
export default App_list;