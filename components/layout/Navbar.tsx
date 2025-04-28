"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    console.log(pathname);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
    ];

    const navbarClass = scrolled
        ? 'shadow-md backdrop-blur-md'
        : 'bg-transparent';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}
        >
            <div className="container-wide py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                            className="text-primary-400"
                        >
                            <Code size={28} />
                        </motion.div>
                        <span className="text-xl font-semibold">Ayoub&apos;s<span className="text-blue-400">Portfolio</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`hover:text-blue-300 transition-colors duration-300 ${pathname === link.path ? 'text-blue-400' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#contact" className="btn-primary">
                            Contact Me
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-200 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden py-4 px-2"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className={`nav-link ${pathname === link.path ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="btn-primary text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
