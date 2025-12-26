import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-8 bg-background border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Abdullahi Abba Ahmad. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};
