import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "../data/profile";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/AshenIndeewara",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
        color: "hover:text-white hover:border-white/40",
    },
    {
        name: "Email",
        url: `mailto:${profile.email}`,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: "hover:text-cyan-400 hover:border-cyan-400/40",
    },
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="contact"
            className="py-32 relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse at bottom center, #1a2a4a 0%, #05071a 60%)" }}
            ref={ref}
        >
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 opacity-10 blur-3xl"
                style={{ background: "linear-gradient(135deg, #00d2ff, #3a7bd5)" }} />

            <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Get in touch</span>
                    <h2 className="text-4xl lg:text-5xl font-black mt-2">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: "linear-gradient(135deg, #00d2ff, #3a7bd5)" }} />
                </motion.div>

                {/* Main card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="glass rounded-3xl p-10 mb-8"
                    style={{ boxShadow: "0 20px 60px rgba(0,210,255,0.08)" }}
                >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-cyan-400/30">
                        <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                    <p className="text-cyan-400 font-mono text-sm mb-1">{profile.role}</p>
                    <p className="text-gray-500 text-sm mb-6">📍 {profile.location} · 🏢 {profile.company}</p>

                    <p className="text-gray-400 leading-relaxed mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        Feel free to reach out!
                    </p>

                    {/* Email CTA */}
                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 text-lg"
                        style={{ background: "linear-gradient(135deg, #00d2ff, #3a7bd5)", boxShadow: "0 8px 30px rgba(0,210,255,0.3)" }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Say Hello
                    </a>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mt-8">
                        {socialLinks.map(({ name, url, icon, color }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                title={name}
                                className={`glass w-12 h-12 rounded-full flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-200 ${color}`}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-gray-600 text-sm font-mono"
                >
                    Built with ⚛️ React + 💨 Tailwind · © {new Date().getFullYear()} {profile.name}
                </motion.p>
            </div>
        </section>
    );
}
