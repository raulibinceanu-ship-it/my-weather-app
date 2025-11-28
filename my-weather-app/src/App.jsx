import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WeatherDetails from "./components/WeatherDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
