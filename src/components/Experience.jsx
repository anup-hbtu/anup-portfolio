import Reveal from "./Reveal";

function Experience() {
  return (
    <Reveal>
      <section
        id="experience"
        className="border-t border-slate-800/60 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Experience
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Building & Supporting Production Systems
            </h2>
          </div>

          {/* Experience Card */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">

            {/* Top */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <p className="text-sm font-medium text-cyan-400">
                  Tata Consultancy Services
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Software Engineer
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Backend Engineering · Application Support · Cloud
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-sm font-medium text-slate-300">
                  February 2025 — Present
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Kolkata, India
                </p>
              </div>

            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-slate-800" />

            {/* Responsibilities */}
            <div className="grid gap-8 lg:grid-cols-2">

              <div>
                <h4 className="mb-4 font-semibold text-white">
                  Backend Engineering
                </h4>

                <ul className="space-y-3 text-sm leading-7 text-slate-400">
                  <li>
                    <span className="mr-2 text-cyan-400">▹</span>
                    Developing backend services using Java and Spring Boot.
                  </li>

                  <li>
                    <span className="mr-2 text-cyan-400">▹</span>
                    Working with REST APIs, Spring Data JPA and
                    microservice-based architectures.
                  </li>

                  <li>
                    <span className="mr-2 text-cyan-400">▹</span>
                    Implementing event-driven communication using
                    Apache Kafka.
                  </li>

                  <li>
                    <span className="mr-2 text-cyan-400">▹</span>
                    Working with MySQL and Couchbase and optimizing
                    database queries.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">
                  Cloud & Production Support
                </h4>

                <ul className="space-y-3 text-sm leading-7 text-slate-400">
                  <li>
                    <span className="mr-2 text-cyan-400">▹</span>
                    Supporting applications and production environments
                    with incident and ticket resolution.
                  </li>

                  <li>
                    <span className="mr-2 text-cyan-400">▹</span>
                    Working with Microsoft Azure services and
                    application monitoring.
                  </li>

                  <li>
                    <span className="mr-2 text-cyan-400">▹</span>
                    Working with CI/CD pipelines and observability
                    tools such as Grafana.
                  </li>

                  <li>
                    <span className="mr-2 text-cyan-400">▹</span>
                    Troubleshooting application, database and
                    integration issues in production environments.
                  </li>
                </ul>
              </div>

            </div>

            {/* Technology Tags */}
            <div className="mt-8 flex flex-wrap gap-2">

              {[
                "Java",
                "Spring Boot",
                "Microservices",
                "REST APIs",
                "Apache Kafka",
                "MySQL",
                "Couchbase",
                "Azure",
                "Git",
                "CI/CD",
                "Grafana",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default Experience;