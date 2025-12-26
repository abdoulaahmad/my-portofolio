import { motion } from 'framer-motion';
import { Aperture, Maximize2 } from 'lucide-react';

const photos = [
    {
        id: "IMG_01",
        src: "/gallery/hero.jpg",
        category: "HACKATHON",
        caption: "BLOCKDAG HACKTHON",
        size: "1MB"
    },
    {
        id: "IMG_02",
        src: "/gallery/blockdags.jpg",
        category: "HACKATHON",
        caption: "BLOCKDAG HACKTHON",
        size: "1MB"
    },
    {
        id: "IMG_03",
        src: "/gallery/sui.jpg",
        category: "BUILDATHON",
        caption: "SUI BUILDATHON, Kaduna",
        size: "1MB"
    },
    {
        id: "IMG_04",
        src: "/gallery/jeri.jpg",
        category: "BUILDATHON",
        caption: "SUI BUILDATHON, Kaduna",
        size: "1MB"
    },
    {
        id: "IMG_05",
        src: "/gallery/judge.jpg",
        category: "HACKATHON",
        caption: "BLOCKDAG JOS",
        size: "2MB"
    },
    {
        id: "IMG_06",
        src: "/gallery/aptos.jpg",
        category: "Meetup",
        caption: "APTOS MEETUP, Jigawa",
        size: "1MB"
    }
];

export const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <Aperture className="text-blue-500 animate-spin-slow" />
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
                        VISUAL_ARCHIVE<span className="text-blue-500 animate-pulse">_</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group md:first:col-span-2 md:first:row-span-2 aspect-square md:first:aspect-auto"
                        >
                            <div className="absolute inset-0 bg-blue-500/10 rounded-xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                            <div className="relative h-full overflow-hidden rounded-xl border border-white/10 group-hover:border-blue-500/50 transition-colors bg-black">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />

                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />

                                {/* HUD Overlay */}
                                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="flex justify-between items-start">
                                        <div className="bg-black/80 backdrop-blur border border-blue-500/30 px-2 py-1 rounded text-[10px] font-mono text-blue-400">
                                            ID: {photo.id}
                                        </div>
                                        <div className="bg-black/80 backdrop-blur border border-white/10 p-2 rounded-full text-white">
                                            <Maximize2 size={14} />
                                        </div>
                                    </div>

                                    <div className="bg-black/90 backdrop-blur border-t border-blue-500/50 p-4 -mx-6 -mb-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                                            <span className="text-xs font-mono text-blue-400">{photo.category}</span>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <h3 className="font-bold text-white text-lg">{photo.caption}</h3>
                                            <span className="text-[10px] font-mono text-gray-500">{photo.size}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Decor Corners */}
                                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 group-hover:border-blue-500/50 transition-colors z-20" />
                                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover:border-blue-500/50 transition-colors z-20" />
                                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 group-hover:border-blue-500/50 transition-colors z-20" />
                                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 group-hover:border-blue-500/50 transition-colors z-20" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
