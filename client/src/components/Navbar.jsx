import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Task Manager</Link>
      </h1>
      <input
         type="text"
         placeholder="Buscar..."
         class="w-1/2 p-2 rounded-full border-none text-lg shadow-md" />
             <select
        class="p-2 rounded-full border-none text-black shadow-md bg-white"
      >
        <option value="" disabled selected>Filtrar</option>
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
