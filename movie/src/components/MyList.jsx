export default function MyList({ myList, goHome }) {
  return (
    <div className="home">
      <h1 className="title">📌 My List</h1>
      <button onClick={goHome}>⬅ Back</button>

      <div className="movie-row">
        {myList.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.name} />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
