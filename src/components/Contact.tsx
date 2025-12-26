import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowRight, MessageSquare, Shield, Terminal } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <div className="flex items-center gap-2 mb-4 text-blue-500 font-mono text-sm tracking-wider">
                        <Shield size={16} />
                        <span>SECURE_CHANNEL_ESTABLISHED</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter mb-4">
                        Contact Me<span className="text-blue-500 animate-pulse">_</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg">

                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Book a Call Uplink */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />

                        <div className="relative h-full bg-black border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all flex flex-col hover:border-blue-500/50">
                            {/* Decorative Header */}
                            <div className="flex justify-between items-start mb-8 pb-4 border-b border-white/5">
                                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                    BOOK: _MEETING
                                </div>
                                <Terminal size={16} className="text-gray-600" />
                            </div>

                            <div className="flex-grow">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                                    <Calendar size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Book a Call</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Schedule a direct line to discuss technical requirements, project scope, or potential collaborations.
                                </p>
                            </div>

                            <a
                                href="https://calendar.app.google/MnycQz1CyJRVBCVs7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-blue-600/10 border border-blue-500/30 text-blue-400 rounded-xl font-bold font-mono hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-8">{'>'}</span>
                                BOOK A CALL
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Send Email Uplink */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-purple-500/10 rounded-2xl transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />

                        <div className="relative h-full bg-black border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all flex flex-col hover:border-purple-500/50">
                            {/* Decorative Header */}
                            <div className="flex justify-between items-start mb-8 pb-4 border-b border-white/5">
                                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                                    EMAIL: ASYNC_MSG
                                </div>
                                <Terminal size={16} className="text-gray-600" />
                            </div>

                            <div className="flex-grow">
                                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
                                    <Mail size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Send Transmission</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Send a message for inquiries, proposals, or technical queries. Response latency: Low.
                                </p>
                            </div>

                            <a
                                href="mailto:abdullahiabbaahmad39@gmail.com"
                                className="w-full py-4 bg-purple-600/10 border border-purple-500/30 text-purple-400 rounded-xl font-bold font-mono hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-8">{'>'}</span>
                                SEND_EMAIL
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Decos */}
                <div className="mt-20 flex justify-center gap-4 text-gray-500 text-xs font-mono">
                    <span>AVAILABLE</span>
                    <span>|</span>
                    <span>STATUS: ONLINE</span>
                    <span>|</span>
                    <span>RESPONSE: HIGH</span>
                </div>
            </div>
        </section>
    );
};
