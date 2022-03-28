import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  function fetchFilms() {
    fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(
        data => {
          setMovies(data.results)
        });
    };
  

  useEffect(() => {
    fetchFilms()
}, [])

  function getMoviesElements(){
    return movies.map((movie) => {
      return(
        <h1>{movie.title}</h1>
      )
    });
  }

return(
  <div className="App">
      <header className="App-header">
        <div>{getMoviesElements()}</div>
      </header>
    </div>
  )

}

export default App;
