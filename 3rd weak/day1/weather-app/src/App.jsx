import React from "react";
import WeatherWidget from "./components/WeatherWidget";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <div className="app">
      <h1>React Hooks Assignment</h1>

      <WeatherWidget />
      <UserSearch />
    </div>
  );
}

export default App;
