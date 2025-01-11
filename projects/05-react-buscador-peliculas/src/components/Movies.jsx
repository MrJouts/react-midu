function ListOfMovies({ movies }) {
  const renderMovies = () => {
    return movies.map((movie) => (
      <li key={movie.id} className="movie">
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
        <img
          src={movie.poster}
          alt={`Portada de ${movie.title}`}
          className="movie__poster"
        />
      </li>
    ));
  };

  return <ul className="movies">{renderMovies()}</ul>;
}

function NoMoviesResults() {
  return <p>No hay resultados</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return (
    <main className="movies">
      {hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />}
    </main>
  );
}
