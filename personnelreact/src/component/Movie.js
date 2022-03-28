import moviecss from './movie.module.css';

function Movie(props) {


return(
    <div>
      <div className ={moviecss.movie}>
        <h1 className={moviecss.titleFilm}>{props.movie.title}</h1>
        {/* <p>{props.movie.opening_crawl}</p> */}
        <p className={moviecss.texte}>Date de sortie : {props.movie.release_date}</p>
        <p className={moviecss.texte}>Producteur : {props.movie.producer}</p>
      </div>
    </div>
  )

}

export default Movie;
