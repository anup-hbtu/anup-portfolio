import Reveal from "./Reveal";

function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="border-t border-slate-800/60 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Engineering with a Backend-First Mindset
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">

            {/* Main Introduction */}
            <div className="lg:col-span-2">
              <p className="text-lg leading-8 text-slate-300">
                I'm a Software Engineer focused on building backend
                systems using Java and Spring Boot. My work involves
                REST APIs, microservices, event-driven architecture,
                database optimization and application reliability.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400">
                Alongside backend engineering, I'm actively working with
                Generative AI technologies and building applications
                involving RAG, LLMs, Azure AI and intelligent document
                processing.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400">
                I enjoy understanding how systems work internally,
                solving algorithmic problems and continuously improving
                my knowledge of scalable software architecture.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-sm text-slate-500">
                  Primary Focus
                </p>
                <p className="mt-2 font-semibold text-white">
                  Java Backend Engineering
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-sm text-slate-500">
                  Architecture
                </p>
                <p className="mt-2 font-semibold text-white">
                  Microservices & Event-Driven Systems
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-sm text-slate-500">
                  Emerging Focus
                </p>
                <p className="mt-2 font-semibold text-white">
                  Generative AI & RAG
                </p>
              </div>

            </div>
          </div>

          {/* Engineering Principles */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-slate-800 p-6">
              <div className="mb-4 text-2xl">⚙️</div>
              <h3 className="font-semibold text-white">
                Scalable Backend
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Designing maintainable APIs and services with
                scalability and reliability in mind.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 p-6">
              <div className="mb-4 text-2xl">📨</div>
              <h3 className="font-semibold text-white">
                Event-Driven Architecture
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Working with asynchronous communication and
                event-driven workflows using Kafka.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 p-6 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 text-2xl">🤖</div>
              <h3 className="font-semibold text-white">
                AI Engineering
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Exploring RAG, LLM applications and AI-powered
                solutions for real-world problems.
              </p>
            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default About;