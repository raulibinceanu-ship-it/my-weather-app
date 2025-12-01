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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "calc(100vh - 70px)",
        paddingTop: "30px",
      }}
    >
      <div className="card p-4 shadow" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Cerca il meteo della tua città</h3>

        <input
          type="text"
          className="form-control"
          placeholder="Inserisci una città..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button className="btn btn-primary mt-3 w-100" onClick={handleSearch}>
          Cerca
        </button>
      </div>
    </div>
  );
}

export default Home;
