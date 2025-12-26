import { motion } from 'framer-motion';
import { GraduationCap, Award, Book, Code } from 'lucide-react';

const education = [
    {
        id: "0x01",
        degree: "BSc Software Engineering",
        school: "Federal University Dutse, Jigawa State",
        year: "2022 - ...",
        status: "Ongoing",
        modules: ["Distributed Systems", "Cryptography", "Algorithms", "Data Structures"],
        desc: "Specialized in decentralized systems and network security."
    },

];

export const Education = () => {
    return (
        <section id="education" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20 md:justify-end"
                >
                    <div className="text-right">
                        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
                            EDUCATION<span className="text-emerald-500 animate-pulse">_</span>
                        </h2>
                        <div className="text-emerald-500 font-mono text-sm mt-2 flex items-center justify-end gap-2">
                            <Award size={14} /> KNOWLEDGE_BASE :: LOADED
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

                            <div className="relative p-8 bg-black border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all hover:bg-white/5 overflow-hidden">
                                {/* Tech Pattern Background */}
                                <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                                            <GraduationCap size={24} />
                                        </div>
                                        <span className="font-mono text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                                            ID: {edu.id}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{edu.degree}</h3>
                                    <div className="flex justify-between items-center mb-6">
                                        <p className="text-gray-400 font-medium">{edu.school}</p>
                                        <span className="text-emerald-500 text-sm font-mono font-bold bg-emerald-500/10 px-2 py-1 rounded">
                                            [{edu.status}]
                                        </span>
                                    </div>

                                    <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-emerald-500/30 transition-colors" />

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <Book size={14} className="text-emerald-500" />
                                            <span>Start: {edu.year.split(' - ')[0]}</span>
                                            <span className="text-gray-600">{">>"}</span>
                                            <span>End: {edu.year.split(' - ')[1] || 'NOW'}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {edu.modules.map((mod, i) => (
                                                <span key={i} className="flex items-center gap-1 text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                                                    <Code size={10} /> {mod}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
