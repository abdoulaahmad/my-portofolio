import { motion } from 'framer-motion';
import { Database, Layout, Server, Cpu, Terminal, Cloud, Activity, Layers } from 'lucide-react';

const skills = [
    { icon: <Layout />, name: "FRONTEND", desc: "React, Framer, Tailwind", color: "text-blue-400", border: "border-blue-500/50" },
    { icon: <Server />, name: "BACKEND", desc: "Node, Go, Python", color: "text-purple-400", border: "border-purple-500/50" },
    { icon: <Database />, name: "DATA", desc: "Postgres, Redis, Mongo", color: "text-emerald-400", border: "border-emerald-500/50" },
    {
        icon: <Cpu />,
        name: "BLOCKCHAIN",
        desc: "DApps, Solidity, Move, Aptos",
        color: "text-orange-400",
        border: "border-orange-500/50",
    },
    {
        icon: <Cloud />,
        name: "DECENTRALIZED STORAGE",
        desc: "IPFS, Content Addressing",
        color: "text-cyan-400",
        border: "border-cyan-500/50",
    },
    {
        icon: <Activity />,
        name: "CONSENSUS",
        desc: "Probabilistic Fast Commit, DAG, BFT",
    },
    {
        icon: <Layers />,
        name: "SYSTEM DESIGN",
        desc: "Scalability, APIs, Architecture",
    }
];

export const About = () => {
    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            {/* Decorative Grid Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <Terminal className="text-blue-500" />
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
                        ABOUT ME<span className="text-blue-500 animate-pulse">_</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-2xl bg-surface/50 border border-white/10 backdrop-blur-sm relative group overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500/50" />
                            <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />

                            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                <span className="text-blue-400 font-mono text-sm block mb-2">// BIOS.init()</span>
                                I am a full-stack and blockchain engineer focused on building reliable frontend and backend systems, decentralized applications, and production-ready software. My work sits at the intersection of application engineering and distributed systems, where correctness, performance, and scalability matter.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">

                            </p>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                                <div className="text-3xl font-bold font-mono text-white mb-1">05+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Years Exp.</div>
                            </div>
                            <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                                <div className="text-3xl font-bold font-mono text-white mb-1">50+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Projects</div>
                            </div>
                            <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                                <div className="text-3xl font-bold font-mono text-white mb-1">100%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Commitment</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 bg-black border ${skill.border} rounded-xl hover:bg-white/5 transition-all group relative overflow-hidden`}
                            >
                                <div className={`absolute top-0 right-0 p-3 opacity-20 ${skill.color} group-hover:opacity-40 transition-opacity`}>
                                    {skill.icon}
                                </div>
                                <div className={`${skill.color} mb-4 transform group-hover:scale-110 transition-transform origin-left`}>
                                    {skill.icon}
                                </div>
                                <h3 className="font-bold font-mono text-lg mb-2 tracking-wider">{skill.name}</h3>
                                <p className="text-sm text-gray-400 font-mono">{skill.desc}</p>

                                {/* Tech Corner Accent */}
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-xl group-hover:border-white/30 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
