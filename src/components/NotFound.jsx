import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-8 text-center">
      <h1 className="mb-4 text-6xl font-bold text-pink-600">404</h1>
      <p className="mb-6 text-xl text-gray-700">
        Oops! This page doesn't exist.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
