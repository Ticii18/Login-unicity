import { Link } from "react-router-dom";

function HomePage() {
  return (
    <><main className="flex-grow">
        <section className="flex flex-wrap justify-around my-10">
          <div
            className="bg-white rounded-lg shadow-lg w-72 m-5 text-center p-5 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              alt="Profile 1"
              className="w-full rounded-full mb-4" />
            <h3 className="text-xl text-gray-800 mb-2">John Doe</h3>
            <p className="text-gray-600 mb-4">Carpintero</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-400"
            >
              Contactar
            </button>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg w-72 m-5 text-center p-5 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              alt="Profile 2"
              className="w-full rounded-full mb-4" />
            <h3 className="text-xl text-gray-800 mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-4">Electricista</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-400"
            >
              Contactar
            </button>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg w-72 m-5 text-center p-5 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              alt="Profile 3"
              className="w-full rounded-full mb-4" />
            <h3 className="text-xl text-gray-800 mb-2">Michael Lee</h3>
            <p className="text-gray-600 mb-4">Jardinero</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-400"
            >
              Contactar
            </button>
          </div>
        </section>
      </main><footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Unicity. Todos los derechos reservados.</p>
          <p>
            <a href="#" className="text-white hover:underline"
            >Política de privacidad</a>
            |
            <a href="#" className="text-white hover:underline"
            >Términos de servicio</a>
          </p>
        </div>
      </footer></>
  );

}

export default HomePage;
