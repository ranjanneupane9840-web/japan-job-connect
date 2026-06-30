import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-blue-100 py-20">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl font-bold text-blue-700">
          Find Part-time Jobs in Japan
        </h1>

        <p className="mt-5 text-gray-700 text-lg">
          Search jobs and build your Japanese Resume online.
        </p>

        <Link to="/resume">
          <button className="bg-blue-700 text-white px-8 py-3 rounded mt-8 hover:bg-blue-800">
            Build Resume
          </button>
        </Link>

      </div>
    </section>
  );
}

export default Hero;