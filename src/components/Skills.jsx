import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Backend Engineering",
    icon: "⚙️",
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "REST APIs",
      "Microservices",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
    ],
  },
  {
    title: "Data & Messaging",
    icon: "🗄️",
    skills: [
      "MySQL",
      "Couchbase",
      "Apache Kafka",
      "SQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Grafana",
    ],
  },
  {
    title: "Generative AI",
    icon: "🤖",
    skills: [
      "Azure OpenAI",
      "Azure AI",
      "RAG",
      "LangChain",
      "FAISS",
      "LLM Applications",
    ],
  },
  {
    title: "Frontend",
    icon: "💻",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Core Engineering",
    icon: "🧠",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "Multithreading",
      "Concurrency",
      "System Design",
    ],
  },
];

function Skills() {
  return (
    <Reveal>
      <section
        id="skills"
        className="border-t border-slate-800/60 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technical Skills
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Technologies I Work With
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              A backend-focused technology stack spanning application
              development, distributed systems, cloud platforms and
              Generative AI.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/70"
              >

                <div className="mb-5 flex items-center gap-3">
                  <span className="text-2xl">
                    {group.icon}
                  </span>

                  <h3 className="font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300 transition group-hover:border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default Skills;