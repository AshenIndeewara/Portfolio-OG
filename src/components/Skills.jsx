import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    SiTypescript, SiJavascript, SiPython, SiReact,
    SiHtml5, SiCss3, SiSpringboot, SiNodedotjs,
    SiDocker, SiTelegram, SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const techStack = [
    { name: "TypeScript", Icon: SiTypescript, color: "#3178c6", bg: "rgba(49,120,198,0.12)" },
    { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e", bg: "rgba(247,223,30,0.10)" },
    { name: "Java", Icon: FaJava, color: "#f89820", bg: "rgba(248,152,32,0.12)" },
    { name: "Python", Icon: SiPython, color: "#3776ab", bg: "rgba(55,118,171,0.12)" },
    { name: "React", Icon: SiReact, color: "#61dafb", bg: "rgba(97,218,251,0.10)" },
    { name: "HTML5", Icon: SiHtml5, color: "#e34f26", bg: "rgba(227,79,38,0.12)" },
    { name: "CSS3", Icon: SiCss3, color: "#1572b6", bg: "rgba(21,114,182,0.12)" },
    { name: "Spring Boot", Icon: SiSpringboot, color: "#6db33f", bg: "rgba(109,179,63,0.12)" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933", bg: "rgba(51,153,51,0.12)" },
    { name: "Docker", Icon: SiDocker, color: "#2496ed", bg: "rgba(36,150,237,0.12)" },
    { name: "Telegram", Icon: SiTelegram, color: "#26a5e4", bg: "rgba(38,165,228,0.12)" },
    { name: "REST APIs", Icon: TbApi, color: "#a855f7", bg: "rgba(168,85,247,0.12)" },
];

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="skills"
            className="py-32"
            style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #05071a 100%)" }}
            ref={ref}
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">What I work with</span>
                    <h2 className="text-4xl lg:text-5xl font-black mt-2">
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                    <div className="w-16 h-1 mx-auto mt-4 rounded-full"
                        style={{ background: "linear-gradient(135deg,#00d2ff,#3a7bd5)" }} />
                    <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
                        Technologies I've used across 46+ projects, from small scripts to full-stack applications.
                    </p>
                </motion.div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techStack.map(({ name, Icon, color, bg }, i) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: i * 0.05, duration: 0.4, type: "spring" }}
                            className="glass rounded-2xl p-5 flex flex-col items-center gap-3 card-hover group cursor-default"
                        >
                            {/* Icon circle */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                style={{ background: bg }}
                            >
                                <Icon size={26} color={color} />
                            </div>
                            <span className="text-xs font-semibold text-gray-300 text-center group-hover:text-white transition-colors leading-tight">
                                {name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Language distribution bars */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16 glass rounded-3xl p-8"
                >
                    <h3 className="text-lg font-bold mb-6 text-center text-gray-300">Language Distribution Across Projects</h3>
                    <div className="space-y-4">
                        {[
                            { lang: "TypeScript", Icon: SiTypescript, pct: 30, color: "#3178c6" },
                            { lang: "Java", Icon: FaJava, pct: 25, color: "#f89820" },
                            { lang: "Python", Icon: SiPython, pct: 22, color: "#3776ab" },
                            { lang: "JavaScript", Icon: SiJavascript, pct: 15, color: "#f7df1e" },
                            { lang: "HTML / CSS", Icon: SiHtml5, pct: 8, color: "#e34f26" },
                        ].map(({ lang, Icon, pct, color }, i) => (
                            <div key={lang}>
                                <div className="flex items-center justify-between text-sm mb-1 gap-2">
                                    <div className="flex items-center gap-2">
                                        <Icon size={14} color={color} />
                                        <span className="text-gray-300">{lang}</span>
                                    </div>
                                    <span className="font-mono" style={{ color }}>{pct}%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${pct}%` } : {}}
                                        transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                                        className="h-full rounded-full"
                                        style={{ background: color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
