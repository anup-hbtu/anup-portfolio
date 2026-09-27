import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* Professional Role */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Software Engineer
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Java Backend Engineer

            <span className="mt-2 block text-cyan-400">
              Spring Boot • Microservices • Kafka
            </span>
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I'm Anup Kumar, a Software Engineer focused on Java backend
            development, distributed systems and Generative AI.
          </p>

          {/* Supporting Statement */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            I enjoy turning complex engineering problems into reliable,
            scalable and maintainable backend systems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View My Work
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              Let's Connect
            </a>

          </div>

          {/* Quick Highlights */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">

            <div>
              <span className="font-semibold text-white">
                Java
              </span>{" "}
              Backend
            </div>

            <div>
              <span className="font-semibold text-white">
                Spring Boot
              </span>{" "}
              Microservices
            </div>

            <div>
              <span className="font-semibold text-white">
                Kafka
              </span>{" "}
              Event-Driven
            </div>

            <div>
              <span className="font-semibold text-white">
                GenAI
              </span>{" "}
              Applications
            </div>

          </div>
        </motion.div>

        {/* Right Side — Profile + Engineering Identity */}
        <motion.div
          className="hidden justify-center lg:flex"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <div className="relative flex w-full max-w-md flex-col items-center">

            {/* Profile Photo */}
            <div className="relative">

              {/* Subtle glow */}
              <div className="absolute -inset-3 rounded-3xl bg-cyan-500/10 blur-2xl" />

              <div className="relative h-80 w-64 overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Anup Kumar"
                  className="h-full w-full object-cover object-center"
                />
              </div>

            </div>

            {/* Engineering Identity Card */}
            <motion.div
              className="relative mt-6 w-full rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
                ease: "easeOut",
              }}
            >

              {/* Terminal Header */}
              <div className="mb-5 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              {/* Engineering Details */}
              <div className="space-y-3 font-mono text-sm">

                <div>
                  <span className="text-purple-400">
                    role
                  </span>

                  <span className="text-slate-500">
                    {" = "}
                  </span>

                  <span className="text-green-400">
                    "Java Backend Engineer"
                  </span>
                </div>

                <div>
                  <span className="text-purple-400">
                    stack
                  </span>

                  <span className="text-slate-500">
                    {" = "}
                  </span>

                  <span className="text-cyan-400">
                    "Spring Boot + Kafka"
                  </span>
                </div>

                <div>
                  <span className="text-purple-400">
                    architecture
                  </span>

                  <span className="text-slate-500">
                    {" = "}
                  </span>

                  <span className="text-cyan-400">
                    "Microservices"
                  </span>
                </div>

                <div>
                  <span className="text-purple-400">
                    focus
                  </span>

                  <span className="text-slate-500">
                    {" = "}
                  </span>

                  <span className="text-cyan-400">
                    "GenAI Applications"
                  </span>
                </div>

                {/* Status */}
                <div className="mt-5 border-t border-slate-800 pt-4">
                  <span className="text-green-400">
                    ✓ Building reliable systems
                  </span>
                </div>

              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;