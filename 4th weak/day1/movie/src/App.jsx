import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Fav from "./components/Fav";
import MyList from "./components/MyList";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("home");

  const [favourites, setFavourites] = useState([]);
  const [myList, setMyList] = useState([]);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  if (page === "fav") {
    return (
      <Fav
        favourites={favourites}
        goHome={() => setPage("home")}
      />
    );
  }

  if (page === "mylist") {
    return (
      <MyList
        myList={myList}
        goHome={() => setPage("home")}
      />
    );
  }

  return (
    <Home
      favourites={favourites}
      setFavourites={setFavourites}
      myList={myList}
      setMyList={setMyList}
      goFav={() => setPage("fav")}
      goMyList={() => setPage("mylist")}
    />
  );
}
