import Reveal from "./Reveal";

function Architecture() {
  return (
    <Reveal>
      <section
        className="border-t border-slate-800/60 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              OrderFlow Architecture
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Event-Driven Order Processing
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
              OrderFlow uses independently deployable services with Kafka
              as the asynchronous communication layer between business
              services.
            </p>
          </div>

          {/* Architecture Flow */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">

            <div className="min-w-[900px]">

              {/* Client */}
              <div className="flex justify-center">
                <ArchitectureBox
                  title="Client"
                  subtitle="Web / Postman"
                />
              </div>

              <Arrow />

              {/* Gateway */}
              <div className="flex justify-center">
                <ArchitectureBox
                  title="API Gateway"
                  subtitle="Single Entry Point"
                  highlight
                />
              </div>

              <Arrow />

              {/* Services */}
              <div className="grid grid-cols-3 gap-6">

                <ArchitectureBox
                  title="Auth Service"
                  subtitle="JWT Authentication"
                />

                <ArchitectureBox
                  title="Order Service"
                  subtitle="Order Management"
                  highlight
                />

                <ArchitectureBox
                  title="Inventory Service"
                  subtitle="Stock Management"
                />

              </div>

              <div className="my-6 flex justify-center">
                <div className="h-12 w-px bg-slate-700" />
              </div>

              {/* Kafka */}
              <div className="flex justify-center">
                <ArchitectureBox
                  title="Apache Kafka"
                  subtitle="Event Bus"
                  highlight
                />
              </div>

              <div className="my-6 flex justify-center">
                <div className="h-12 w-px bg-slate-700" />
              </div>

              {/* Events */}
              <div className="grid grid-cols-2 gap-6">

                <ArchitectureBox
                  title="order-created"
                  subtitle="Order Event"
                />

                <ArchitectureBox
                  title="inventory-reserved"
                  subtitle="Inventory Event"
                />

              </div>

              <div className="my-6 flex justify-center">
                <div className="h-12 w-px bg-slate-700" />
              </div>

              {/* Databases */}
              <div className="grid grid-cols-3 gap-6">

                <ArchitectureBox
                  title="MySQL"
                  subtitle="Auth / Inventory Data"
                />

                <ArchitectureBox
                  title="MongoDB"
                  subtitle="Order Data"
                />

                <ArchitectureBox
                  title="Docker"
                  subtitle="Containerized Services"
                />

              </div>

            </div>

          </div>

          {/* Event Flow */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">

              <h3 className="text-xl font-semibold text-white">
                Successful Order Flow
              </h3>

              <div className="mt-6 space-y-3 font-mono text-sm">

                <FlowStep text="POST /orders" />
                <FlowArrow />
                <FlowStep text="Order Service → PENDING" />
                <FlowArrow />
                <FlowStep text="Kafka → order-created" />
                <FlowArrow />
                <FlowStep text="Inventory → stock reserved" />
                <FlowArrow />
                <FlowStep text="Kafka → inventory-reserved" />
                <FlowArrow />
                <FlowStep text="Order Service → CONFIRMED" />

              </div>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">

              <h3 className="text-xl font-semibold text-white">
                Failed Inventory Flow
              </h3>

              <div className="mt-6 space-y-3 font-mono text-sm">

                <FlowStep text="POST /orders" />
                <FlowArrow />
                <FlowStep text="Order Service → PENDING" />
                <FlowArrow />
                <FlowStep text="Kafka → order-created" />
                <FlowArrow />
                <FlowStep text="Inventory → insufficient stock" />
                <FlowArrow />
                <FlowStep text="Kafka → inventory-rejected" />
                <FlowArrow />
                <FlowStep text="Order Service → CANCELLED" />

              </div>

            </div>

          </div>

          {/* Engineering Decisions */}
          <div className="mt-10">

            <h3 className="mb-6 text-xl font-semibold text-white">
              Key Engineering Decisions
            </h3>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              <DecisionCard
                title="Microservices"
                description="Business capabilities are separated into independently deployable services."
              />

              <DecisionCard
                title="Kafka"
                description="Asynchronous events reduce tight coupling between services."
              />

              <DecisionCard
                title="Database Ownership"
                description="Each service owns its persistence boundary."
              />

              <DecisionCard
                title="Event-Driven Flow"
                description="Order state progresses through domain events instead of synchronous service chaining."
              />

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}


/* ---------- Reusable Components ---------- */

function ArchitectureBox({ title, subtitle, highlight = false }) {
  return (
    <div
      className={`w-full rounded-xl border p-5 text-center transition ${
        highlight
          ? "border-cyan-500/40 bg-cyan-500/5"
          : "border-slate-700 bg-slate-950"
      }`}
    >
      <h3 className="font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="my-5 flex justify-center text-xl text-cyan-400">
      ↓
    </div>
  );
}

function FlowStep({ text }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-slate-300">
      {text}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="text-center text-cyan-400">
      ↓
    </div>
  );
}

function DecisionCard({ title, description }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <h4 className="font-semibold text-white">
        {title}
      </h4>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default Architecture;