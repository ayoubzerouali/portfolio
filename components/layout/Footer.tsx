"use client"
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Code } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';

const Footer = () => {
    return (
        <footer className="bg-background-secondary py-12">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 text-white mb-4">
                            <Code size={24} className="text-blue-400" />
                            <span className="text-xl font-semibold">Dev<span className="text-blue-400">Portfolio</span></span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Fullstack developer with expertise in PHP, TypeScript, Golang, and mobile development.
                            Creating high-quality digital experiences for the web and mobile.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon icon={<Github size={20} />} href="https://github.com" label="GitHub" />
                            <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" label="Twitter" />
                            <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com" label="LinkedIn" />
                            <SocialIcon icon={<Mail size={20} />} href="mailto:contact@example.com" label="Email" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Get In Touch</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400">
                                <Link href="mailto:ayoubxzer@gmail.com" className="hover:text-blue-400 transition-colors">
                                    ayoubxzer@gmail.com
                                </Link>
                            </li>
                            <li className="text-gray-400">
                                <Link href="tel:+213794204344" className="hover:text-blue-400 transition-colors">
                                    +213 (7) 94 20 44 44
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Ayoub Zerouali. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Currated developer 
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
