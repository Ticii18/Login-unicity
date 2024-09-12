import { Link } from "react-router-dom";

function HomePage() {
  return (
    <><main class="flex-grow">
        <section class="flex flex-wrap justify-around my-10">
          <div
            class="bg-white rounded-lg shadow-lg w-72 m-5 text-center p-5 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              alt="Profile 1"
              class="w-full rounded-full mb-4" />
            <h3 class="text-xl text-gray-800 mb-2">John Doe</h3>
            <p class="text-gray-600 mb-4">Carpintero</p>
            <button
              class="bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-400"
            >
              Contactar
            </button>
          </div>

          <div
            class="bg-white rounded-lg shadow-lg w-72 m-5 text-center p-5 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              alt="Profile 2"
              class="w-full rounded-full mb-4" />
            <h3 class="text-xl text-gray-800 mb-2">Jane Smith</h3>
            <p class="text-gray-600 mb-4">Electricista</p>
            <button
              class="bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-400"
            >
              Contactar
            </button>
          </div>

          <div
            class="bg-white rounded-lg shadow-lg w-72 m-5 text-center p-5 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              alt="Profile 3"
              class="w-full rounded-full mb-4" />
            <h3 class="text-xl text-gray-800 mb-2">Michael Lee</h3>
            <p class="text-gray-600 mb-4">Jardinero</p>
            <button
              class="bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-400"
            >
              Contactar
            </button>
          </div>
        </section>
      </main><footer class="bg-blue-500 text-white py-4">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 Unicity. Todos los derechos reservados.</p>
          <p>
            <a href="#" class="text-white hover:underline"
            >Política de privacidad</a>
            |
            <a href="#" class="text-white hover:underline"
            >Términos de servicio</a>
          </p>
        </div>
      </footer></>
  );
      // <Link
      //   className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
      //   to="/register"
      // >
      //   Get Started
      // </Link>
}

export default HomePage;
