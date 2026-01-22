"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import projectsData from "@/data/projects.json";

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="section-title">
                        <span className="section-number">03.</span>
                        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-green-400 text-4xl">
                                        <FaFolder />
                                    </div>
                                    <div className="flex gap-4 text-gray-400">
                                        <a href={project.links.github} className="hover:text-white transition-colors"><FaGithub size={22} /></a>
                                        <a href={project.links.details} className="hover:text-white transition-colors"><FaExternalLinkAlt size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto text-xs font-mono text-gray-500">
                                    {project.tags.map(tag => (
                                        <li key={tag} className="bg-white/5 px-2 py-1 rounded">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <a href="#" className="inline-block px-8 py-4 border border-green-500/20 text-green-400 font-mono text-sm tracking-widest rounded hover:bg-green-500/10 transition-all">
                            VIEW FULL ARCHIVE
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
