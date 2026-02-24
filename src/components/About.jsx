import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "../data/profile";

const stats = [
    { label: "Repositories", value: "46+", icon: "📁" },
    { label: "Public Projects", value: "29", icon: "🌐" },
    { label: "Followers", value: "20", icon: "👥" },
    { label: "Languages", value: "8+", icon: "💻" },
];

const infoCards = [
    { icon: "📍", label: "Location", value: profile.location },
    { icon: "🏢", label: "Company", value: profile.company },
    { icon: "📅", label: "Member Since", value: profile.memberSince },
    { icon: "✉️", label: "Email", value: profile.email },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 bg-navy-950" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Who I am</span>
                    <h2 className="text-4xl lg:text-5xl font-black mt-2">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: "linear-gradient(135deg, #00d2ff, #3a7bd5)" }} />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {profile.bio}
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            I've built a diverse portfolio spanning full-stack marketplaces, real-time chat apps,
                            automation bots, and enterprise systems. I'm passionate about clean architecture,
                            developer experience, and shipping products that make a real impact.
                        </p>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-3">
                            {infoCards.map(({ icon, label, value }) => (
                                <div key={label} className="glass rounded-xl p-3 flex items-center gap-3">
                                    <span className="text-xl">{icon}</span>
                                    <div>
                                        <div className="text-xs text-gray-500">{label}</div>
                                        <div className="text-sm text-white font-medium">{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <a
                                href="https://github.com/AshenIndeewara"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-cyan-400 hover:text-white text-sm font-medium transition-colors"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map(({ label, value, icon }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                                className="glass rounded-2xl p-6 text-center card-hover"
                            >
                                <div className="text-3xl mb-3">{icon}</div>
                                <div className="text-3xl font-black text-gradient mb-1">{value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div>
                            </motion.div>
                        ))}

                        {/* Avatar card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="glass rounded-2xl p-6 col-span-2 flex items-center gap-4"
                        >
                            <img
                                src={profile.avatar}
                                alt={profile.name}
                                className="w-16 h-16 rounded-full"
                                style={{ boxShadow: "0 0 20px rgba(0,210,255,0.3)" }}
                            />
                            <div>
                                <div className="font-bold text-lg">{profile.name}</div>
                                <div className="text-cyan-400 text-sm font-mono">{profile.role}</div>
                                <div className="text-gray-500 text-xs mt-1">@ {profile.company}</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
