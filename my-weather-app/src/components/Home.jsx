import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== "") {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4"> My Weather App</h1>

      <input
        type="text"
        className="form-control w-50 m-auto"
        placeholder="Inserisci una città..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="btn btn-primary mt-3" onClick={handleSearch}>
        Cerca
      </button>
    </div>
  );
}

export default Home;
