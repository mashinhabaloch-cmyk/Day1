import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <Home />
      ) : (
        <Login onLogin={setUser} />
      )}
    </>
  );
}

export default App;
