import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, GitCommit } from 'lucide-react';

const experiences = [
    {
        id: "01",
        role: "Lead Developer",
        company: "Virtual Connekt",
        period: "2021 - PRESENT",
        tech: ["React", "Node.js", "Smart Contract", "Web3", "Move", "MongoDB", "IPFS", "PHP"],
        desc: "Develop full-stack web applications and decentralized systems, combining traditional backend services with Web3 integrations. Responsible for frontend development in React, backend APIs in Node.js, Express, and PHP, database design with MongoDB, and DApp features such as smart contract interaction and IPFS-based storage.",
    },

]

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <GitCommit className="text-purple-500" />
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
                        EXPERIENCE<span className="text-purple-500 animate-pulse">_</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Timeline Trace */}
                    <div className="absolute left-0 md:left-1/2 w-px h-full bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-20">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Connector (Desktop) */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                                    <div className="w-12 h-12 bg-black border border-blue-500/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping absolute opacity-75" />
                                        <div className="w-3 h-3 bg-blue-500 rounded-full relative" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 w-full group">
                                    <div className="relative p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl absolute inset-0" />

                                    <div className="relative p-8 bg-black border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all hover:bg-white/5 overflow-hidden">
                                        {/* Decorative header line */}
                                        <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                                            <div>
                                                <span className="text-blue-400 font-mono text-sm mb-1 block">ID: {exp.id}</span>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                                            </div>
                                            <div className="text-right">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                                                    <Calendar size={12} />
                                                    {exp.period}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <p className="text-purple-400 font-medium mb-3 flex items-center gap-2">
                                                <Briefcase size={16} />
                                                {exp.company}
                                            </p>
                                            <p className="text-gray-400 leading-relaxed font-light">
                                                {exp.desc}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded text-xs font-mono hover:bg-blue-500/20 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Corner Accents */}
                                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
                                            <ChevronRight />
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for layout balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
