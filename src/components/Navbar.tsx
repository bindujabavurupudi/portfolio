import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/30"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href="public/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsla(186,100%,50%,0.4)] transition-all duration-300 hover:scale-105"
        >
          <Download size={16} />
          Resume
        </a>

        {/* Mobile: hamburger only */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong border-t border-border"
        >
          <ul className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="w-full text-left px-4 py-3 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/30"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
