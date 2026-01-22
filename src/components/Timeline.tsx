"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaServer } from "react-icons/fa";
import experienceData from "@/data/experience.json";

const icons = {
    shield: FaShieldAlt,
    lock: FaLock,
    server: FaServer,
};

export default function Timeline() {
    return (
        <section id="experience" className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="flex items-center gap-2 mb-12">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
                            <span className="text-green">04.</span> EXPERIENCE
                        </h2>
                        <div className="h-px bg-white/20 flex-grow ml-4"></div>
                    </div>

                    <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
                        {experienceData.map((exp, index) => {
                            const Icon = icons[exp.icon as keyof typeof icons] || FaShieldAlt;

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="relative pl-8 md:pl-12"
                                >
                                    <span className="absolute -left-[9px] top-0 p-2 bg-black border border-green text-green rounded-full shadow-lg shadow-green/20">
                                        <Icon size={14} />
                                    </span>

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-sm font-mono text-green">{exp.duration}</span>
                                    </div>
                                    <h4 className="text-lg text-blue font-mono mb-4">{exp.company}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
