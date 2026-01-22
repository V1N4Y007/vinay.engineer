"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
    {
        name: "CCEP - Red Team Leaders",
        issuer: "Red Team Leaders",
        date: "Dec 2025",
        id: "Issued Dec 2025",
        color: "text-red-500",
        border: "group-hover:border-red-500/50"
    },
    {
        name: "Ethical Hacking",
        issuer: "NPTEL",
        date: "Nov 2025",
        id: "Issued Nov 2025",
        color: "text-yellow-500",
        border: "group-hover:border-yellow-500/50"
    },
    {
        name: "Google Cloud Cybersecurity",
        issuer: "Google Cloud Security",
        date: "Oct 2025",
        id: "ID: vjVOU1Qu",
        color: "text-blue",
        border: "group-hover:border-blue/50"
    },
    {
        name: "Containers w/ Docker & K8s",
        issuer: "IBM",
        date: "Aug 2025",
        id: "Issued Aug 2025",
        color: "text-green",
        border: "group-hover:border-green/50"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-12">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
                            <span className="text-green">05.</span> CREDENTIALS
                        </h2>
                        <div className="h-px bg-white/20 flex-grow ml-4"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-[#0b0f1a] border border-white/10 p-6 rounded-lg group transition-all duration-300 ${cert.border}`}
                            >
                                <div className={`text-4xl mb-4 ${cert.color}`}>
                                    <FaCertificate />
                                </div>
                                <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:text-white/90">{cert.name}</h3>
                                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                                <div className="flex justify-between items-center mt-4 text-xs font-mono text-white/30">
                                    <span>{cert.date}</span>
                                    <span>{cert.id}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
