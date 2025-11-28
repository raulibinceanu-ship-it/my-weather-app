import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark py-3 shadow-sm mb-4">
      <div className="container">
        <Link className="navbar-brand fs-4" to="/">
          My Weather App
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
