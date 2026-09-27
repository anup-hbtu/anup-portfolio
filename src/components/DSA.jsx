import Reveal from "./Reveal";

function DSA() {
  const topics = [
    {
      title: "Arrays & Strings",
      description: "Sliding Window, Two Pointers, Prefix Sum, Hashing",
    },
    {
      title: "Linked Lists",
      description: "Fast & Slow Pointers, Reversal, Cycle Detection",
    },
    {
      title: "Trees & BST",
      description: "DFS, BFS, Recursion, Path Problems, BST Operations",
    },
    {
      title: "Graphs",
      description: "BFS, DFS, Shortest Path, Topological Sort",
    },
    {
      title: "Dynamic Programming",
      description: "State Design, Memoization, Tabulation, Optimization",
    },
    {
      title: "Backtracking",
      description: "Recursion, Choose → Explore → Undo",
    },
    {
      title: "Binary Search",
      description: "Sorted Search, Rotated Arrays, Search on Answer",
    },
    {
      title: "Stack & Heap",
      description: "Monotonic Stack, Priority Queue, Top-K Problems",
    },
  ];

  return (
    <Reveal>
      <section
        id="dsa"
        className="border-t border-slate-800 bg-slate-950 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Problem Solving
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              DSA & Problem Solving
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg">
              Strong foundation in data structures, algorithms, and
              problem-solving patterns with a focus on writing efficient,
              scalable solutions.
            </p>
          </div>

          {/* Topic Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                  <span className="text-sm font-bold">DSA</span>
                </div>

                <h3 className="text-lg font-semibold text-white transition group-hover:text-cyan-400">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Pattern-Based Problem Solving
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                  Focused on recognizing the underlying pattern, defining the
                  required state, maintaining the right invariant, and selecting
                  an efficient approach rather than memorizing individual
                  solutions.
                </p>
              </div>

              <a
                href="https://github.com/anup-hbtu"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg border border-cyan-500/50 px-5 py-3 text-center text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
              >
                View GitHub
              </a>

            </div>
          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default DSA;