"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaLock, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate secure transmission
        setTimeout(() => {
            setStatus("sent");
        }, 2000);
    };

    return (
        <section id="contact" className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                            <span className="text-green">06.</span> UPLINK_ESTABLISHED
                        </h2>
                        <p className="text-gray-400">Send an encrypted message to the operator.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-[#0b0f1a] p-8 border border-white/10 rounded-lg relative overflow-hidden">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                            {status === "sending" && (
                                <motion.div
                                    className="h-full bg-green"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2 }}
                                />
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-green block">ID: NAME</label>
                                <input
                                    type="text"
                                    required
                                    disabled={status !== "idle"}
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green/50 transition-all font-mono"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-green block">ID: EMAIL</label>
                                <input
                                    type="email"
                                    required
                                    disabled={status !== "idle"}
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green/50 transition-all font-mono"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-green block">PAYLOAD: MESSAGE</label>
                            <textarea
                                rows={5}
                                required
                                disabled={status !== "idle"}
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green/50 transition-all font-mono resize-none"
                                placeholder="Enter your message sequence..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status !== "idle"}
                            className={`w-full py-4 font-mono font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${status === "sent"
                                    ? "bg-green text-black cursor-default"
                                    : "bg-white/5 border border-white/10 text-white hover:bg-green/20 hover:border-green hover:text-green"
                                }`}
                        >
                            {status === "idle" && (
                                <>
                                    <FaLock size={12} /> ENCRYPT & SEND
                                </>
                            )}
                            {status === "sending" && (
                                <>
                                    <span className="animate-pulse">TRANSMITTING...</span>
                                </>
                            )}
                            {status === "sent" && (
                                <>
                                    <FaCheckCircle /> TRANSMISSION COMPLETE
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
