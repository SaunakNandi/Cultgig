import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "navbar-blur shadow-[0_14px_38px_rgba(0,0,0,0.32),0_4px_14px_rgba(255,185,2,0.12)]"
          : "bg-transparent shadow-[0_8px_24px_rgba(0,0,0,0.14)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-1"
          data-testid="nav-logo"
        >
          <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
            Ind<span className="text-[#FFB902]">gig</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#A3A3A3] hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Sign In button (desktop) */}
        <a
          href="#"
          data-testid="nav-signin-btn"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-transparent border-2 border-[#FFB902] text-[#FFB902] font-semibold text-sm hover:bg-[#FFB902] hover:text-black transition-all duration-300"
        >
          Sign In
        </a>

        {/* Mobile hamburger */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-[#A3A3A3] hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-transparent border-2 border-[#FFB902] text-[#FFB902] font-semibold text-sm hover:bg-[#FFB902] hover:text-black transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
