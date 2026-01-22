"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="section-title">
                        <span className="section-number">01.</span>
                        <h2 className="text-3xl font-bold text-white">About Me</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>

                    <div className="glass-card rounded-xl overflow-hidden shadow-2xl">
                        {/* Terminal Header */}
                        <div className="bg-white/5 px-4 py-3 flex items-center gap-4 border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                            </div>
                            <div className="flex-1 text-center text-xs font-mono text-white/30">
                                vinay_trivedi — -zsh — 80x24
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-8 font-mono text-sm md:text-base leading-relaxed text-gray-300">
                            <p className="mb-6">
                                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-white">whoami</span>
                            </p>

                            <div className="space-y-4 text-gray-400 pl-4 border-l-2 border-white/5">
                                <p>
                                    <span className="text-white font-bold">Vinay Trivedi</span>
                                    <br />
                                    Cyber Security Engineer @ COE Security LLC
                                </p>
                                <p>
                                    Based in <span className="text-white">Bhavnagar, Gujarat, India</span>
                                </p>
                                <p className="pt-2">
                                    I am a <span className="text-white">Pre-Final Year Student</span> at CHARUSAT with a deep focus on securing digital infrastructure. My work bridges the gap between offensive security (Red Teaming) and defensive strategies (Cloud Security).
                                </p>
                                <p>
                                    Currently holding certifications in <span className="text-white">Google Cloud Security</span>, <span className="text-white">Docker/K8s</span>, and <span className="text-white">Ethical Hacking</span>.
                                </p>
                            </div>

                            <p className="mt-8 animate-pulse">
                                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="inline-block w-2.5 h-4 bg-gray-500 ml-2 align-middle"></span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
