"use client";

import { motion } from "framer-motion";
import MatrixRain from "./MatrixRain";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            <MatrixRain />

            {/* Overlay gradient for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-0 pointer-events-none" />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-mono text-white/70 tracking-wider">SYSTEM_ONLINE</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">
                        Vinay Trivedi
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Cyber Security Engineer <span className="text-gray-600 px-2">|</span> Red Teamer <span className="text-gray-600 px-2">|</span> Cloud Security
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="#projects"
                        className="group relative px-8 py-3 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:bg-gray-200"
                    >
                        <span className="relative z-10">View Work</span>
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
