"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
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
            <div className="container-wide pb-4">
                <div className="flex items-center justify-end ">
                    {/* Logo */}

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex flex-grow gap-10 w-2/3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`flex justify-center py-2 px-5 hover:bg-blue-400/20
                                    w-35 border border-dotted border-white/20  transition-colors 
                                    duration-300 rounded-b-xl ${pathname === link.path ?
                                        'bg-blue-400/20' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-200  focus:outline-none "
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={44} />}
                    </button>
                    <Link href="#contact" className="hidden md:flex py-2 px-5 hover:bg-blue-500 
                        transition-colors duration-300 bg-blue-600 rounded-b-xl font-bold">
                        Contact Me
                    </Link>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden py-4 px-2 bg-black/90"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className={`border-b nav-link ${pathname === link.path ? 'active' : ''}`}
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
