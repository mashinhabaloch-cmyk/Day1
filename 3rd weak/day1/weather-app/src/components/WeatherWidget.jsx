import React, { useEffect, useState } from "react";

const WeatherWidget = () => {
  // Temperature state
  const [temperature, setTemperature] = useState(null);

  // Loading state (default true)
  const [isLoading, setIsLoading] = useState(true);

  // Error state
  const [error, setError] = useState(null);

  // Reusable fetch function (used for Retry also)
  const fetchWeather = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true"
      );

      if (!response.ok) {
        throw new Error("API failed");
      }

      const data = await response.json();
      setTemperature(data.current_weather.temperature);
    } catch (err) {
      setError("Weather service unavailable.");
    } finally {
      setIsLoading(false);
    }
  };

  // Run only once on component mount
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="card">
      <h2>🌦 Weather Widget</h2>

      {/* Loading State */}
      {isLoading && <p>Checking the skies...</p>}

      {/* Error State */}
      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={fetchWeather}>Retry</button>
        </div>
      )}

      {/* Success State */}
      {!isLoading && !error && (
        <p>Current Temp: {temperature}°C</p>
      )}
    </div>
  );
};

export default WeatherWidget;
