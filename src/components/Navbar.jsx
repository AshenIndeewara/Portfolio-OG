import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ["home", "about", "skills", "projects", "contact"];
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNav = (href) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-2xl border-b border-white/5" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
                    className="font-mono text-lg font-bold text-gradient"
                >
                    &lt;Ashen /&gt;
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ label, href }) => {
                        const id = href.replace("#", "");
                        return (
                            <a
                                key={label}
                                href={href}
                                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                                className={`text-sm font-medium transition-all duration-200 relative group ${active === id ? "text-cyan-400" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {label}
                                <span
                                    className={`absolute -bottom-0.5 left-0 h-px bg-accent-gradient transition-all duration-300 ${active === id ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                    style={{ background: "linear-gradient(135deg, #00d2ff, #3a7bd5)" }}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* CTA */}
                <a
                    href="https://github.com/AshenIndeewara"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                </a>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-400 hover:text-white p-2"
                >
                    <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                    <div className={`w-5 h-0.5 bg-current my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/5"
                    >
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                                className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
