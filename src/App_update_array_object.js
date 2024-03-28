import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", rating: 3 },
    { id: 2, title: "Superman", rating: 6 },
  ]);

  const handleClick = () =>{
    setMovies(movies.map((m)=>(m.id === 2 ? {...movies, title : "John"}: m)))
  }

  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}

export default App;
