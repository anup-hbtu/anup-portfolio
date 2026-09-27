import Reveal from "./Reveal";

function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="border-t border-slate-800/60 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Let's Build Something Meaningful
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I'm open to opportunities and conversations around Java backend
            engineering, microservices, distributed systems and Generative AI.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            {/* Email */}
            <a
              href="mailto:anupkumar943060@gmail.com"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anup-hbtu/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/anup-hbtu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              GitHub
            </a>

          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default Contact;