import Reveal from "./Reveal";

function Education() {
  return (
    <Reveal>
      <section
        className="border-t border-slate-800/60 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Education & Certifications
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Academic Foundation & Continuous Learning
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Education */}
            <div>
              <h3 className="mb-5 text-xl font-semibold text-white">
                Education
              </h3>

              <div className="space-y-4">

                <EducationCard
                  degree="Master of Computer Applications"
                  institution="Harcourt Butler Technical University, Kanpur"
                  period="2022 — 2024"
                  achievement="NIMCET AIR 812"
                />

                <EducationCard
                  degree="B.Sc. Statistics (Hons.)"
                  institution="Patna University"
                  period="2018 — 2021"
                  achievement="Topper • Graduated with Distinction"
                />

              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="mb-5 text-xl font-semibold text-white">
                Certifications
              </h3>

              <div className="space-y-4">

                <CertificationCard
                  title="Microsoft Certified: Azure AI Engineer Associate"
                  code="AI-102"
                  description="Azure AI engineering and intelligent application development."
                />

              </div>
            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}

function EducationCard({
  degree,
  institution,
  period,
  achievement,
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-cyan-500/30">

      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <h4 className="font-semibold text-white">
            {degree}
          </h4>

          <p className="mt-2 text-sm text-slate-400">
            {institution}
          </p>

          <p className="mt-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            🏆 {achievement}
          </p>
        </div>

        <span className="text-sm text-cyan-400">
          {period}
        </span>

      </div>

    </div>
  );
}

function CertificationCard({
  title,
  code,
  description,
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-cyan-500/30">

      <div className="flex items-start gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-bold text-cyan-400">
          AI
        </div>

        <div>
          <h4 className="font-semibold text-white">
            {title}
          </h4>

          <p className="mt-1 text-xs font-medium text-cyan-400">
            {code}
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Education;