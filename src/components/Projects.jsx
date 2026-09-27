import { projects } from "../data/projects";
import Reveal from "./Reveal";

function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="border-t border-slate-800/60 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Featured Projects
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Engineering Projects
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Projects focused on backend engineering, distributed
              systems and Generative AI.
            </p>
          </div>

          {/* Projects */}
          <div className="grid gap-8 lg:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/70"
              >

                {/* Project Header */}
                <div className="border-b border-slate-800 p-6 sm:p-8">

                  <div className="mb-4 flex items-center justify-between">

                    {project.featured && (
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                        Featured Project
                      </span>
                    )}

                    <span className="text-sm text-slate-600">
                      0{projects.indexOf(project) + 1}
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-cyan-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                </div>

                {/* Project Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">

                  <div>
                    <p className="mb-4 text-sm font-semibold text-white">
                      Key Capabilities
                    </p>

                    <ul className="space-y-3">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-slate-400"
                        >
                          <span className="mr-3 text-cyan-400">
                            ✓
                          </span>

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">

                    <p className="mb-3 text-sm font-semibold text-white">
                      Technology
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Links */}
                  <div className="mt-8 border-t border-slate-800 pt-6">
                    {project.status ? (
                      <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
                        🚧 {project.status}
                      </span>
                    ) : (
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
                        >
                          GitHub →
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                        >
                          View Project →
                        </a>
                      </div>
                    )}
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default Projects;