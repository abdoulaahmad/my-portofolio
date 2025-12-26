import { motion } from 'framer-motion';
import { FileCode, Database, Share2, Loader, CheckCircle } from 'lucide-react';

const publications = [
    {
        id: "RES-001",
        title: "Aptos Room",
        type: "Whitepaper",
        date: "2025.11.19",
        status: "PUBLISHED",
        link: "https://aptosroom.app/Aptos%20Room%20WhitePaper%20V1.pdf",
        abstract: "AptosRoom is a decentralized coordination protocol designed to bring verifiable skill and trustless arbitration to the Web3 labor market."
    },
    {
        id: "RES-002",
        title: "DAGDEV",
        type: "Documentation",
        date: "2025.12.21",
        status: "PUBLISHED",
        link: "https://dagdev.vercel.app/docs/intro",
        abstract: "Development environment for BlockDAG network."
    },
    {
        id: "RES-003",
        title: "Probablistic Fast Commit",
        type: "Research Paper",
        date: "Ongoing",
        status: "ONGOING",
        link: "#",
        abstract: "A low-latency blockchain confirmation model using cryptographic randomness and probabilistic ordering guarantees."
    },

];

export const Research = () => {
    return (
        <section id="research" className="py-24 bg-black relative overflow-hidden">
            {/* Background Matrix Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20 md:justify-center"
                >
                    <Database className="text-emerald-500" />
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
                        RESEARCH AND PUBLICATIONS<span className="text-emerald-500 animate-pulse">_</span>
                    </h2>
                </motion.div>

                <div className="grid gap-6 max-w-5xl mx-auto">
                    {publications.map((pub, index) => (
                        <motion.a
                            key={index}
                            href={pub.link}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block relative"
                        >
                            {/* Hover Glow */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500 ${pub.status === 'ONGOING' ? 'from-amber-500 to-orange-600' : 'from-emerald-500 to-blue-600'}`} />

                            <div className={`relative p-8 bg-black border rounded-lg transition-all flex flex-col md:flex-row gap-8 items-start ${pub.status === 'ONGOING' ? 'border-amber-500/20 hover:bg-amber-500/5' : 'border-white/10 hover:bg-emerald-500/5'}`}>
                                {/* ID Column */}
                                <div className={`md:w-32 flex-shrink-0 flex flex-col items-center justify-center p-4 rounded border font-mono text-xs ${pub.status === 'ONGOING' ? 'bg-amber-500/5 border-amber-500/20 text-amber-500' : 'bg-emerald-500/5 border-emerald-500/20 text-emerald-500'}`}>
                                    {pub.status === 'ONGOING' ? <Loader size={24} className="mb-2 animate-spin-slow" /> : <FileCode size={24} className="mb-2" />}
                                    <span>{pub.id}</span>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-mono text-gray-400">
                                            <span className={`px-2 py-0.5 border rounded bg-white/5 ${pub.status === 'ONGOING' ? 'border-amber-500/30 text-amber-400' : 'border-white/10 text-gray-300'}`}>
                                                TYPE: {pub.type.toUpperCase()}
                                            </span>
                                            <span>// DATE: {pub.date}</span>
                                        </div>

                                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono border ${pub.status === 'ONGOING' ? 'bg-amber-500/10 border-amber-500/30 text-amber-500' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500'}`}>
                                            {pub.status === 'ONGOING' ? (
                                                <>
                                                    <span className="relative flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                                    </span>
                                                    ONGOING
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle size={12} />
                                                    PUBLISHED
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className={`text-2xl font-bold text-white mb-3 transition-colors font-heading ${pub.status === 'ONGOING' ? 'group-hover:text-amber-400' : 'group-hover:text-emerald-400'}`}>
                                        {pub.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed font-light">
                                        {pub.abstract}
                                    </p>
                                </div>

                                <div className="flex-shrink-0 self-center hidden md:block">
                                    <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${pub.status === 'ONGOING' ? 'group-hover:border-amber-500 group-hover:bg-amber-500/10' : 'group-hover:border-emerald-500 group-hover:bg-emerald-500/10'}`}>
                                        <Share2 size={16} className={`text-gray-500 ${pub.status === 'ONGOING' ? 'group-hover:text-amber-400' : 'group-hover:text-emerald-400'}`} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
