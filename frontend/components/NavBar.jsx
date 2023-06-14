import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <h1>MySQL Crud</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/new">Crear producto</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
