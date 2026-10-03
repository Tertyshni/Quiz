const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Фантастика"
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Фантастика"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Бойовик"
  },
  {
    id: 4,
    title: "Avatar",
    year: 2009,
    genre: "Пригоди"
  },
  {
    id: 5,
    title: "The Matrix",
    year: 1999,
    genre: "Фантастика"
  },
  {
    id: 6,
    title: "Gladiator",
    year: 2000,
    genre: "Історичний"
  }
];

function Movies() {
  return (
    <section>
      <h2>Каталог фільмів</h2>

      <div className="movies">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="movie-image">🎬</div>

            <h3>{movie.title}</h3>

            <p>Рік: {movie.year}</p>
            <p>Жанр: {movie.genre}</p>

            <button>Детальніше</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Movies;