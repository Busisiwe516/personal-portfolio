const skills = [
  { name: "HTML", icon: "🌐", level: "Confident" },
  { name: "CSS", icon: "🎨", level: "Confident" },
  { name: "JavaScript", icon: "⚡", level: "Intermediate" },
  { name: "React", icon: "⚛️", level: "Learning" },
  { name: "Tailwind CSS", icon: "💨", level: "Learning" },
  { name: "Bootstrap", icon: "🅱️", level: "Intermediate" },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-8 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
        My Skills
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="mb-3 text-4xl">{skill.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900">
              {skill.name}
            </h3>
            <p className="mt-1 text-sm text-pink-600">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
