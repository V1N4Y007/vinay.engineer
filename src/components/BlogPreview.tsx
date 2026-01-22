"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const posts = [
    {
        title: "Reverse Engineering Malware X",
        date: "Jan 12, 2024",
        excerpt: "A deep dive into the obfuscation techniques used by the latest ransomware strain...",
        slug: "#"
    },
    {
        title: "Securing Kubernetes Clusters",
        date: "Dec 28, 2023",
        excerpt: "Best practices for hardening your K8s control plane and worker nodes against attacks...",
        slug: "#"
    },
    {
        title: "The State of Zero Trust",
        date: "Nov 15, 2023",
        excerpt: "Why the traditional perimeter is dead and how to implement ZTNA effectively...",
        slug: "#"
    }
];

export default function BlogPreview() {
    return (
        <section id="blog" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-12">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
                            <span className="text-green">07.</span> WRITEUPS
                        </h2>
                        <div className="h-px bg-white/20 flex-grow ml-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <motion.a
                                key={index}
                                href={post.slug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                transition={{ delay: index * 0.1 }}
                                className="block bg-white/5 border border-white/10 p-6 rounded-lg hover:border-green/30 hover:bg-white/10 transition-all group"
                            >
                                <div className="text-xs font-mono text-green mb-2">{post.date}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green transition-colors font-mono">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-blue text-sm font-mono group-hover:gap-2 transition-all">
                                    READ_MORE <FaArrowRight size={12} className="ml-1" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
