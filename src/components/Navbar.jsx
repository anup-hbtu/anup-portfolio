import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide text-white"
        >
          Anup<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Experience
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-cyan-500/50 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/10"
          >
            Contact
          </a>

          {/* Desktop Resume */}
          <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
>
  Resume
</a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Experience
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-lg border border-cyan-500/50 px-4 py-3 text-center text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/10"
            >
              Contact
            </a>

            {/* Mobile Resume */}
            <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={closeMenu}
  className="rounded-lg bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
>
  View Resume
</a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;