import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { to: "about", label: "About" },
  { to: "education", label: "Education" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // In Navbar or App.tsx
useEffect(() => {
  const titles = ["Pritkumar Patel", "🚀 Data Science Portfolio"];
  let i = 0;
  const interval = setInterval(() => {
    document.title = titles[i % titles.length];
    i++;
  }, 2500);
  return () => clearInterval(interval);
}, []);

  return (
    <>
      <motion.nav
        initial={{ y: -36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 inset-x-0 z-50 ${scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-white/70 backdrop-blur"}`}
      >
        <div className="container">
          <div className="h-14 flex items-center justify-between">
            <a href="/" className="text-[15px] font-semibold text-blue-700">Pritkumar Patel</a>

            <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              {sections.map(s => (
                <li key={s.to}>
                  <ScrollLink
                    to={s.to}
                    smooth
                    duration={600}
                    offset={-70}
                    spy
                    activeClass="text-blue-600"
                    className="cursor-pointer hover:text-blue-500"
                    onClick={() => setOpen(false)}
                  >
                    {s.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded hover:bg-blue-50"
              onClick={() => setOpen(v => !v)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
                {open ? <path d="M6 18L18 6M6 6l12 12" /> : <>
                  <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
                </>}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="container pb-3 space-y-2 text-gray-700">
                {sections.map(s => (
                  <li key={s.to}>
                    <ScrollLink
                      to={s.to}
                      smooth
                      duration={600}
                      offset={-70}
                      spy
                      className="block py-2 rounded hover:bg-blue-50"
                      onClick={() => setOpen(false)}
                    >
                      {s.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
            
      {/* Spacer so content isn't hidden under the fixed nav */}
      <div className="h-14" />
    </>
  );
};

export default Navbar;
