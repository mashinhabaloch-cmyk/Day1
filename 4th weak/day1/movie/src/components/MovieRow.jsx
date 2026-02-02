export default function MovieRow({
  title,
  movies,
  addToFav,
  addToMyList,
}) {
  if (movies.length === 0) return null;

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="movie-row">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.name} />
            <p>{movie.name}</p>

            <div className="card-buttons">
              <button onClick={() => addToFav(movie)}>❤️</button>
              <button onClick={() => addToMyList(movie)}>➕</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
