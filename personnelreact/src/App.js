import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './component/Movie';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFilms()
  }, [])

  function fetchFilms() {
    fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(
        data => {
          setMovies(data.results)
        });
  }

  function getMoviesElements(){
    return movies.map((movie, key) => {
      return(
        <Movie movie={movie} key={key}/>
      )
    });
  }

  return(
   <div className="App">
      <header className="App-header">
      <h1>Les films Star Wars</h1>
        <div className="grilleFilm">{getMoviesElements()}</div>
      </header>
    </div>
  )

}

export default App;
