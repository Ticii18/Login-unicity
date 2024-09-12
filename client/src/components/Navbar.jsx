import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import { useState } from 'react';

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Task Manager</Link>
      </h1>
      <input
        type="text"
        placeholder="Buscar..."
        className="w-1/2 p-2 rounded-full border-none text-lg shadow-md" />
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="p-2 rounded-full border-none text-black shadow-md bg-white"
      >
        <option value="" disabled>Filtrar</option>
        <option value="option1">Electricidad</option>
        <option value="option2">Carpintería</option>
        <option value="option3">Albañilería</option>
      </select>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Welcome {user.username}
            </li>
            <li>
              <ButtonLink to="/add-task">Add Task</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
