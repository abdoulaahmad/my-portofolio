import { motion } from 'framer-motion';
import { Calendar, MapPin, Radio, Globe, MessageSquare } from 'lucide-react';

const events = [
    {
        name: "BlockDAG",
        role: "SPEAKER",
        date: "2024.03.15",
        location: "Jos, Nigeria",
        type: "Community Meetup",
        desc: "f."
    },
    {
        name: "Aptos CTRL MOVE",
        role: "PARTICIPANT",
        date: "2025.09.10",
        location: "Global / Remote",
        type: "HACKATHON",
        desc: "Participated in the Aptos CTRL MOVE hackathon."
    },
    {
        name: "Aptos Developers Meetup",
        role: "PARTICIPANT",
        date: "2025.10.10",
        location: "Dutse, Nigeria",
        type: "Developer's Meetup",
        desc: "Participated in the Aptos Developers Meetup."
    },
    {
        name: "BlockDAG",
        role: "PARTICIPANT",
        date: "Ongoing",
        location: "Global / Remote",
        type: "HACKATHON",
        desc: "Building DAGDEV for blockdag ecosystem"
    },
    {
        name: "SUI BUILDATHON",
        role: "PARTICIPANT",
        date: "2025.08.11",
        location: "Kaduna, Nigeria",
        type: "Hackathon",
        desc: "Participated in the SUI Buildathon and won the third prize for our project 'SUIFLOW'."
    }
];

export const Community = () => {
    return (
        <section id="community" className="py-24 bg-black relative overflow-hidden">
            {/* Background World Map / Network Graph Simulation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <Radio className="text-blue-500 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
                        NETWORK_ACTIVITY<span className="text-blue-500 animate-pulse">_</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />

                            <div className="relative h-full bg-black border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all flex flex-col hover:border-blue-500/50">
                                {/* Header Badge */}
                                <div className="flex justify-between items-start mb-6">
                                    <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs font-mono font-bold border border-blue-500/20">
                                        {event.type}
                                    </span>
                                    <Globe size={20} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                                    {event.name}
                                </h3>

                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                                        ROLE :: {event.role}
                                    </span>
                                </div>

                                <div className="w-12 h-1 bg-blue-500/20 mb-6 group-hover:w-full transition-all duration-500" />

                                <div className="space-y-3 font-mono text-xs text-gray-400 mb-6 flex-grow">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-blue-500" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-blue-500" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {event.desc}
                                </p>

                                {/* Corner Accents */}
                                <div className="absolute bottom-0 right-0 p-3 opacity-20 text-blue-500 group-hover:opacity-100 transition-opacity">
                                    <MessageSquare size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
