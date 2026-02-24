import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    SiTypescript, SiJavascript, SiPython, SiHtml5, SiGithub,
} from "react-icons/si";
import { FaJava, FaStar } from "react-icons/fa";
import { TbApi, TbBrandDocker } from "react-icons/tb";
import { VscTerminalBash } from "react-icons/vsc";
import { projects, categories } from "../data/projects";

// Map primary language → { Icon, color } for project cards
const langIcon = {
    TypeScript: { Icon: SiTypescript, color: "#3178c6" },
    JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
    Java: { Icon: FaJava, color: "#f89820" },
    Python: { Icon: SiPython, color: "#3776ab" },
    HTML: { Icon: SiHtml5, color: "#e34f26" },
    Dockerfile: { Icon: TbBrandDocker, color: "#2496ed" },
    Shell: { Icon: VscTerminalBash, color: "#89e051" },
};

function ProjectIcon({ lang }) {
    const entry = langIcon[lang];
    if (!entry) return <TbApi size={22} color="#a855f7" />;
    const { Icon, color } = entry;
    return <Icon size={22} color={color} />;
}

const langColors = {
    TypeScript: "bg-blue-600/20 text-blue-300 border-blue-600/30",
    JavaScript: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
    Java: "bg-orange-600/20 text-orange-300 border-orange-600/30",
    Python: "bg-green-600/20 text-green-300 border-green-600/30",
    HTML: "bg-red-600/20 text-red-300 border-red-600/30",
    CSS: "bg-blue-500/20 text-blue-200 border-blue-500/30",
    Dockerfile: "bg-cyan-600/20 text-cyan-300 border-cyan-600/30",
};

function getTechBadge(tech) {
    return langColors[tech] || "bg-white/5 text-gray-400 border-white/10";
}

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter || p.primaryLang === activeFilter);

    return (
        <section id="projects" className="py-32 bg-navy-950" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">What I've built</span>
                    <h2 className="text-4xl lg:text-5xl font-black mt-2">
                        My <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: "linear-gradient(135deg, #00d2ff, #3a7bd5)" }} />
                    <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
                        A curated selection from 46+ public and private repositories on GitHub.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap gap-2 justify-center mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeFilter === cat
                                ? "text-white border-transparent"
                                : "text-gray-400 border-white/10 hover:text-white hover:border-white/20"
                                }`}
                            style={activeFilter === cat ? { background: "linear-gradient(135deg, #00d2ff, #3a7bd5)" } : {}}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.repo}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                className="glass rounded-2xl p-6 card-hover flex flex-col group"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg glass flex items-center justify-center flex-shrink-0">
                                            <ProjectIcon lang={project.primaryLang} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors text-sm leading-tight">
                                                {project.name}
                                            </h3>
                                            <span className={`text-xs px-2 py-0.5 rounded-full border ${project.visibility === "PUBLIC"
                                                ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                                                }`}>
                                                {project.visibility.toLowerCase()}
                                            </span>
                                        </div>
                                    </div>
                                    {project.featured && (
                                        <span className="text-xs font-mono text-cyan-400 border border-cyan-400/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                                            <FaStar size={10} />
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.slice(0, 4).map((t) => (
                                        <span key={t} className={`text-xs px-2 py-0.5 rounded-md border ${getTechBadge(t)}`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                    <span className="text-xs text-gray-600 font-mono">{project.primaryLang}</span>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs text-cyan-400 hover:text-white transition-colors flex items-center gap-1"
                                    >
                                        View on GitHub
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 mb-4">Want to see all 46+ repositories?</p>
                    <a
                        href="https://github.com/AshenIndeewara"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 glass border border-white/10 hover:border-cyan-400/50 text-white"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
