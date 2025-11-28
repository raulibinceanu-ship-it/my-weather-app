import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  const API_KEY = "6544ed179283f2be80b875570c270319";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  if (!weather) return <p className="text-center mt-5">Caricamento...</p>;

  return (
    <div className="container mt-5 text-center">
      <h2>Meteo per {city}</h2>
      <h3>{weather.main.temp}°C</h3>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherDetails;
