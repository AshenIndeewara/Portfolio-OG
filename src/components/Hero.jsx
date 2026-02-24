import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Hero() {
    const [typedText, setTypedText] = useState("");
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = profile.taglines[taglineIndex];
        let timeout;

        if (!deleting && charIndex < current.length) {
            timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
        } else if (!deleting && charIndex === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setTaglineIndex((i) => (i + 1) % profile.taglines.length);
        }

        setTypedText(current.slice(0, charIndex));
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, taglineIndex]);

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay, ease: "easeOut" },
        }),
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: "radial-gradient(ellipse at top left, #1a2a4a 0%, #0a0e1a 60%)" }}
        >
            {/* Background glows */}
            <div className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse-slow"
                style={{ background: "linear-gradient(135deg, #00d2ff, #3a7bd5)" }} />
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse-slow"
                style={{ background: "linear-gradient(135deg, #3a7bd5, #00d2ff)", animationDelay: "1.5s" }} />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: "linear-gradient(#00d2ff 1px, transparent 1px), linear-gradient(90deg, #00d2ff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial="hidden" animate="visible" custom={0}
                        variants={fadeUpVariant}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-cyan-400 font-mono mb-6"
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Available for hire
                    </motion.div>

                    <motion.h1
                        initial="hidden" animate="visible" custom={0.15}
                        variants={fadeUpVariant}
                        className="text-5xl lg:text-7xl font-black mb-4 leading-tight"
                    >
                        Hi, I'm{" "}
                        <span className="text-gradient glow-text">{profile.name}</span>
                    </motion.h1>

                    <motion.div
                        initial="hidden" animate="visible" custom={0.3}
                        variants={fadeUpVariant}
                        className="h-12 mb-6"
                    >
                        <p className="text-xl lg:text-2xl text-gray-300 font-mono">
                            <span className="text-cyan-400">{">"}</span>{" "}
                            {typedText}
                            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 animate-pulse" />
                        </p>
                    </motion.div>

                    <motion.p
                        initial="hidden" animate="visible" custom={0.45}
                        variants={fadeUpVariant}
                        className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                    >
                        {profile.bio}
                    </motion.p>

                    <motion.div
                        initial="hidden" animate="visible" custom={0.6}
                        variants={fadeUpVariant}
                        className="flex flex-wrap gap-4 justify-center lg:justify-start"
                    >
                        <a
                            href="#projects"
                            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ background: "linear-gradient(135deg, #00d2ff, #3a7bd5)", boxShadow: "0 4px 20px rgba(0,210,255,0.3)" }}
                        >
                            View Projects
                        </a>
                        <a
                            href="https://github.com/AshenIndeewara"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 rounded-full font-semibold glass text-white border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub Profile
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial="hidden" animate="visible" custom={0.75}
                        variants={fadeUpVariant}
                        className="flex gap-8 mt-12 justify-center lg:justify-start"
                    >
                        {[
                            { val: profile.totalRepos, label: "Repositories" },
                            { val: profile.followers, label: "Followers" },
                            { val: profile.publicRepos, label: "Public Repos" },
                        ].map(({ val, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-2xl font-black text-gradient">{val}+</div>
                                <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                    className="relative flex-shrink-0"
                >
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                        {/* Spinning ring */}
                        <div
                            className="absolute inset-0 rounded-full animate-spin-slow"
                            style={{
                                background: "conic-gradient(from 0deg, #00d2ff, #3a7bd5, transparent, transparent)",
                                padding: "3px",
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-navy-900" />
                        </div>
                        {/* Avatar image */}
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="absolute inset-2 rounded-full object-cover glow"
                            style={{ boxShadow: "0 0 40px rgba(0,210,255,0.3)" }}
                        />
                    </div>
                    {/* Badge */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm font-mono text-cyan-400 whitespace-nowrap"
                    >
                        📍 {profile.location}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-600 font-mono">scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"
                />
            </motion.div>
        </section>
    );
}
