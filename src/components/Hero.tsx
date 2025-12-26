import { motion } from 'framer-motion';
import { ArrowRight, Download, Cpu, Computer, Globe, Zap } from 'lucide-react';
import { ScrambleText } from './ScrambleText';

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative bg-black">
            {/* Sci-fi Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Tech Badge */}
                    <div className="inline-flex items-center gap-2 py-1 px-3 rounded-none border border-blue-500/30 bg-blue-500/5 text-xs font-mono text-blue-400 mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        AVAILABLE :: READY TO DEPLOY
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
                        <ScrambleText text="ABDULLAHI" /> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <ScrambleText text="ABBA AHMAD" />
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed font-light border-l-2 border-blue-500/30 pl-4">
                        Building Fullstack applications, decentralized systems, and production-ready DApps.
                        Merging advanced engineering with visceral design to create
                        next-generation user experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://calendar.app.google/MnycQz1CyJRVBCVs7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-blue-600 text-white font-bold overflow-hidden transition-all hover:scale-105 inline-block"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                BOOK A CALL <ArrowRight size={20} />
                            </span>
                        </a>
                        <button className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                            VIEW PROJECTS
                        </button>
                    </div>

                    {/* Stats / Tech Deco */}
                    <div className="mt-12 flex gap-8 pt-8 border-t border-white/10">
                        <div className="flex items-center gap-3">
                            <Computer className="text-blue-400" />
                            <div>
                                <div className="text-2xl font-bold font-mono">Full-Stack & Web3 Engineer</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-purple-400"> </div>
                            <div>
                                <div className="text-2xl font-bold font-mono"></div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-cyan-400"></div>
                            <div>
                                <div className="text-2xl font-bold font-mono"></div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto group">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Image Container with Glitch Effect frame */}
                        <div className="absolute inset-8 bg-surface overflow-hidden rounded-full border-2 border-white/10 relative z-10 box-decoration-clone hover:border-blue-500/50 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 z-20 mix-blend-overlay pointer-events-none" />
                            {/* Placeholder for User Image */}
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur border border-blue-500/30 p-4 rounded-lg z-20 animate-bounce delay-1000">
                            <code className="text-blue-400 text-xs">const future = true;</code>
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur border border-purple-500/30 p-4 rounded-lg z-20 animate-bounce">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75" />
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
