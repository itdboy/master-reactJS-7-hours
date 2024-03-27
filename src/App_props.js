const User = ({ name, img, age, realData, hobbies , children }) => {
  return (
    <section>
      <img alt={name} src={img} />
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <h1>Real Name : {realData.name}</h1>
      {hobbies.map((hobby) => (
        <ul key={Math.random * 10}>
          <li>{hobby}</li>
        </ul>
      ))}
      {children}
    </section>
  );
};

function App() {
  return (
    <>
      <User
        img="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        name="Boy"
        age={18}
        hobbies={["Coding", "Reading", "Sleeping"]}
        realData={{ name: "Alex", location: "USA" }}
      >
        <h1>Hello I'm a children</h1>
        <p>
          Lorem ipsum 
        </p>
      </User>
    </>
  );
}

export default App;
