import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
function NavBar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/">
        <h1 className="text-white font-bold">CRUD MARIADB Y REACT</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/new" className="bg-teal-200 px-2 py-1">
            Crear producto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
