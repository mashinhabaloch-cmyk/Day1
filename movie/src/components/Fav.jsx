export default function Fav({ favourites, goHome }) {
  return (
    <div className="home">
      <h1 className="title">❤️ Favourite Movies</h1>
      <button onClick={goHome}>⬅ Back</button>

      <div className="movie-row">
        {favourites.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.name} />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
