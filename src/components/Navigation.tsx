"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Timelines", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="container flex items-center justify-between py-4">
                <Link href="/" className="flex items-center gap-2 text-xl font-mono text-green hover:text-blue transition-colors">
                    <FaTerminal />
                    <span className="font-bold">vinay.engineer</span>
                    <span className="animate-pulse">_</span>
                </Link>
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-mono uppercase tracking-widest hover:text-green transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
