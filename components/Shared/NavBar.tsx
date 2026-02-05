import React from 'react'

export default function NavBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center pt-4">
          <div className="glass-nav mx-4 flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="neon-glow flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="material-symbols-outlined text-xl text-white">
                  electric_bolt
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                NEON
              </span>
            </div>

            <nav className="hidden items-center gap-8 md:flex">
              <a
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                href="#events"
              >
                Events
              </a>
              <a
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                href="#artists"
              >
                Artists
              </a>
              <a
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="text-sm font-medium text-white/70 transition-colors hover:text-primary"
                href="#about"
              >
                About
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="neon-glow rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary/90">
                Get Tickets
              </button>
              <div className="size-10 rounded-full border border-white/20 bg-white/10" />
            </div>
          </div>
        </header>
  )
}
