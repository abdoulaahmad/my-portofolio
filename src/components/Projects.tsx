import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code, Cpu } from 'lucide-react';

const projects = [
    {
        title: "DAGDEV",
        category: "Infrastructure",
        image: "/projects/dagdev.png",
        desc: "DagDev is a CLI-first development framework for BlockDAG-based blockchains. It provides a local DAG execution environment, parallel block simulation, and EVM compatibility.",
        tech: ["Solidity", "React", "Graph", "Hardhat", "Ethers.js"],
        links: { demo: "https://dagdev.vercel.app", github: "https://github.com/virtualconnekt/dag-dev" },
        featured: true,
        imgClass: "object-left-top"
    },
    {
        title: "SUIFLOW",
        category: "Web3 Payment Gateway",
        image: "/projects/suiflow.png",
        desc: "SuiFlow is a cutting-edge Web3 payment gateway built on the Sui blockchain, designed to revolutionize how businesses accept cryptocurrency payments. Our platform combines the speed and security of Sui with an intuitive developer experience.",
        tech: ["Next.js", "IPFS", "Sui", "Move"],
        links: { demo: "https://suiflow.virtualconnekt.com.ng/", github: "https://github.com/virtualconnekt/suiflow-sdk" },
        featured: false,
        imgClass: "object-left-top"
    },
    {
        title: "APTICK",
        category: "Decentralized Billing System",
        image: "/projects/aptick.png",
        desc: "A revolutionary decentralized billing and payment system built on the Aptos blockchain, enabling seamless usage-based billing for Web3 services",
        tech: ["TypeScript", "Aptos", "Move", "Nextjs"],
        links: { demo: "https://aptick.virtualconnekt.com.ng/", github: "https://github.com/virtualconnekt/aptick" },
        featured: false
    },
    {
        title: "APTOS ROOM",
        category: "Decentralized Ecosystem",
        image: "/projects/aptosroom.png",
        desc: "APTOS ROOM is a thriving ecosystem where Web3 builders, developers, designers, and creators converge to contribute their talents to meaningful projects while earning",
        tech: ["TypeScript", "Move", "Nextjs", "Aptos"],
        links: { demo: "https://aptosroom.app/", github: "https://github.com/virtualconnekt/aptosroom" },
        featured: false
    },
    {
        title: "gaXport",
        category: "Decentralized Gas Fees",
        image: "/projects/gaxport.png",
        desc: "Purchase Gas Fees for Any Blockchain, Anytime.",
        tech: ["TypeScript", "Node", "Ethers.js",],
        links: { demo: "https://gaxport.virtualconnekt.com.ng/", github: "https://github.com/virtualconnekt/gaxport" },
        featured: false
    },
    {
        title: "MERKPOLL",
        category: "Decentralized Voting System",
        image: "/projects/merkpoll.png",
        desc: "MerkPoll leverages Merkle Trees and blockchain technology to ensure your vote remains private while maintaining complete transparency and verifiability.",
        tech: ["TypeScript", "Aptos", "Move", "Nextjs", "Merkle Tree", "Content Addressing"],
        links: { demo: "https://merk-poll.vercel.app/", github: "https://github.com/Bugyman66/MerkPoll" },
        featured: false
    },
    {
        title: "Virtual Connekt VTU",
        category: "Virtual Top Up",
        image: "/projects/virtualconnekt.png",
        desc: "VIRTUAL CONNEKT helps you make payments for services you enjoy right from the comfort of your home or office. .",
        tech: ["PHP", "SQL", "WEB2"],
        links: { demo: "https://vtu.virtualconnekt.com.ng/", github: "https://github.com/virtualconnekt/vtu" },
        featured: false
    },


];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <Layers className="text-blue-500" />
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
                        PROJECT_ARCHIVE<span className="text-blue-500 animate-pulse">_</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                            <div className="relative h-full bg-black border border-white/10 rounded-2xl overflow-hidden flex flex-col group-hover:translate-y-[-2px] transition-transform duration-300">
                                {/* Image Area with Overlay */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0 ${project.imgClass || ""}`}
                                    />

                                    {/* Tech Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent z-20">
                                        <div className="flex gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20 backdrop-blur-sm">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow relative bg-black/90 backdrop-blur-xl">
                                    {/* Scanline effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,rgba(0,0,0,0.5)_2px)] bg-[size:100%_4px] opacity-20 pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="text-blue-500 text-xs font-mono font-bold tracking-wider mb-1 block">
                                    // {project.category}
                                                </span>
                                                <h3 className="text-xl font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <Cpu className="text-white/20 group-hover:text-blue-500 transition-colors" />
                                        </div>

                                        <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-light leading-relaxed">
                                            {project.desc}
                                        </p>

                                        <div className="mt-auto flex gap-4 pt-4 border-t border-white/10">
                                            <a href={project.links.demo} className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-blue-600 hover:text-white rounded text-sm font-bold transition-all text-gray-300 group/btn">
                                                <ExternalLink size={16} />
                                                <span className="group-hover/btn:translate-x-1 transition-transform">DEMO</span>
                                            </a>
                                            <a href={project.links.github} className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-purple-600 hover:text-white rounded text-sm font-bold transition-all text-gray-300 group/btn">
                                                <Github size={16} />
                                                <span className="group-hover/btn:translate-x-1 transition-transform">CODE</span>
                                            </a>
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
