import { useNavigate } from "react-router-dom";
import "./navabar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="navbar-title" onClick={() => navigate("/")}>
        Livraria Nabucodonosor
      </h1>
      <button
        className="submit-button button-create-livro"
        onClick={() => navigate("/new")}
      >
        Novo Livro
      </button>
    </nav>
  );
}

export default NavBar;
