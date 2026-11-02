import avatar from "../assets/avatar.svg";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center bg-gray-100 px-8 py-16 text-center"
    >
      <img
        src={avatar}
        alt="Profile"
        className="mb-6 h-40 w-40 rounded-full border-4 border-pink-500 object-cover shadow-lg"
      />
      <h1 className="text-4xl font-bold text-gray-900">Busisiwe Moloi</h1>
      <p className="mt-2 text-xl text-pink-600">Software Development Student</p>
    </section>
  );
}

export default Hero;
