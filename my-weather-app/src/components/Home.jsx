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
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="mb-3"> Cerca il meteo della tua città</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Inserisci una città..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={handleSearch}>
          Cerca
        </button>
      </div>
    </div>
  );
}

export default Home;
