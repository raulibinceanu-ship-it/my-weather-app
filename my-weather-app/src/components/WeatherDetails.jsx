import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [daily, setDaily] = useState([]);

  const API_KEY = "6544ed179283f2be80b875570c270319";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=it`
        );
        const data = await res.json();

        if (data.list) {
          setWeather(data.list[0]);
          setDaily(
            data.list.filter((item, index) => index % 8 === 0).slice(0, 5)
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weather) return <p className="text-center mt-5">Caricamento...</p>;

  return (
    <div className="container text-center">
      <h2 className="mt-4">
        Meteo per <strong>{city}</strong>
      </h2>
      <h3>{weather.main.temp}°C</h3>
      <p className="text-muted">{weather.weather[0].description}</p>

      <hr className="my-4" />

      <h4 className="mb-4 text-center">Prossimi 5 giorni</h4>

      <div className="row justify-content-center">
        {daily.map((day) => (
          <div
            key={day.dt}
            className="col-10 col-sm-6 col-md-2 m-2 p-3 border rounded shadow-sm text-center"
            style={{ minWidth: "150px" }}
          >
            <strong>{day.dt_txt.split(" ")[0]}</strong>
            <p>{day.main.temp}°C</p>
            <p className="text-muted">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDetails;
