// Home.jsx (same imports as before)
import { useState } from "react";   // 👈 YE LINE MISS THI
import MovieRow from "./MovieRow";
import {
  newlyAdded,
  topRated,
  actionMovies,
} from "../data/movies";

export default function Home({
  favourites,
  setFavourites,
  myList,
  setMyList,
  goFav,
  goMyList,
}) {
  const [search, setSearch] = useState("");

  const allMovies = [...newlyAdded, ...topRated, ...actionMovies];

  const searchedMovies = allMovies.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  function addToFav(movie) {
    if (!favourites.find((m) => m.id === movie.id)) {
      setFavourites([...favourites, movie]);
    }
  }

  function addToMyList(movie) {
    if (!myList.find((m) => m.id === movie.id)) {
      setMyList([...myList, movie]);
    }
  }

  return (
    <div className="home-page">
      <div className="home-card">   {/* 👈 NEW CARD */}

        <h1 className="title">MOVIE HUB</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={goFav}>❤️ {favourites.length}</button>
          <button onClick={goMyList}>📌 {myList.length}</button>
        </div>

        {search ? (
          <MovieRow
            title="Search Results"
            movies={searchedMovies}
            addToFav={addToFav}
            addToMyList={addToMyList}
          />
        ) : (
          <>
            <MovieRow
              title="Newly Added"
              movies={newlyAdded}
              addToFav={addToFav}
              addToMyList={addToMyList}
            />
            <MovieRow
              title="Top Rated"
              movies={topRated}
              addToFav={addToFav}
              addToMyList={addToMyList}
            />
            <MovieRow
              title="Action Movies"
              movies={actionMovies}
              addToFav={addToFav}
              addToMyList={addToMyList}
            />
          </>
        )}

      </div>
    </div>
  );
}
