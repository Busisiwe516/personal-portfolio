function ProjectCard({ title, description, tech }) {
  return (
    <div className="flex flex-col rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="mb-3 text-xl font-semibold text-pink-600">{title}</h3>
      <p className="mb-5 flex-grow text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gray-900 px-3 py-1 text-sm text-white"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
