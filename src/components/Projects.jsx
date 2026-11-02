const projects = [
  {
    title: "Pink Dish Menu",
    description:
      "A restaurant menu website for Pink Dish, and my very first project. I designed a clean, easy-to-read layout showcasing the dishes.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Happy Petals",
    description:
      "I redesigned and improved an existing business website to make it look better and work more smoothly for customers.",
    tech: ["Bootstrap", "HTML", "CSS"],
  },
  {
    title: "Front Seat",
    description:
      "An app for taxi passengers that calculates the fare paid and the change required, making payments quick and simple.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-100 px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-semibold text-pink-600">
                {project.title}
              </h3>
              <p className="mb-5 flex-grow text-gray-700">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gray-900 px-3 py-1 text-sm text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
