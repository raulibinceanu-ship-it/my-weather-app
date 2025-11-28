import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function WeatherDetails() {
  const { city } = useParams();

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const API_KEY = "6544ed179283f2be80b875570c270319";

  // METEO ATTUALE
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  // PREVISIONI 5 GIORNI
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=it`
    )
      .then((res) => res.json())
      .then((data) => {
        const daily = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(daily);
      });
  }, [city]);

  if (!weather) return <p className="text-center mt-5">Caricamento...</p>;

  return (
    <div className="container mt-5 text-center">
      {/* METEO ATTUALE */}
      <h2>Meteo per {city}</h2>
      <h3>{weather.main.temp}°C</h3>
      <p>{weather.weather[0].description}</p>

      <hr />

      {/* PREVISIONI 5 GIORNI */}
      <h4>Prossimi 5 giorni</h4>

      <div className="row justify-content-center mt-3">
        {forecast.map((day) => (
          <div
            key={day.dt}
            className="col-6 col-md-2 p-3 border rounded m-2 bg-light"
          >
            <p>
              <strong>{day.dt_txt.split(" ")[0]}</strong>
            </p>
            <p>{day.main.temp}°C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDetails;
