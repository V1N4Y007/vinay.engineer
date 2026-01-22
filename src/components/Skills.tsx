"use client";

import { motion } from "framer-motion";
import skillsData from "@/data/skills.json";
import { useState } from "react";

type SkillCategory = "offensive" | "defensive" | "technologies";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<SkillCategory>("offensive");

    const categories: { id: SkillCategory; label: string }[] = [
        { id: "offensive", label: "Offensive Security" },
        { id: "defensive", label: "Defensive Security" },
        { id: "technologies", label: "Tools & Tech" },
    ];

    return (
        <section id="skills" className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-12">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
                            <span className="text-green">02.</span> SKILL_SET
                        </h2>
                        <div className="h-px bg-white/20 flex-grow ml-4"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Category Selector */}
                        <div className="flex flex-row md:flex-col gap-4 min-w-[200px]">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-3 text-left font-mono border-l-2 transition-all duration-300 ${activeCategory === cat.id
                                            ? "border-green text-green bg-green/10"
                                            : "border-white/10 text-gray-500 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Skills Grid */}
                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillsData[activeCategory].map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#0b0f1a] p-4 border border-white/5 hover:border-green/50 transition-colors group rounded"
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="font-mono text-white group-hover:text-green transition-colors">
                                            {skill.name}
                                        </span>
                                        <span className="font-mono text-gray-500">{skill.level}%</span>
                                    </div>
                                    <div className="h-1 bg-white/10 w-full overflow-hidden rounded-full">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className={`h-full ${activeCategory === "offensive" ? "bg-red-500" :
                                                    activeCategory === "defensive" ? "bg-blue-500" : "bg-green"
                                                }`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
