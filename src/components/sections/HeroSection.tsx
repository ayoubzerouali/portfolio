import { Cpu, Cloud, Globe, GitBranch } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';
import { Github, Twitter, Linkedin } from 'lucide-react'
import Canvas from '../ui/canvas';
import FloatingIcons from '../ui/floating_icons';
import Link from 'next/link';
import ScrollDown from '../ui/srolldown';
const HeroSection = () => {

    return (
        <section className="min-h-screen flex flex-col gap-4 items-center justify-center
        relative overflow-hidden pt-20 px-4">

            <Canvas />

            {/* Decorative grid */}

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
                {/* Content - Left side */}
                <div className="lg:col-span-3">

                    <div className="flex items-center space-x-2 mb-4">
                        <div className="h-0.5 w-8 bg-primary-500"></div>
                        <span className="text-primary-400 font-mono">Hello, I&apos;m <span className='text-yellow-300'>Ayoub</span></span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-white">Fullstack</span>
                        <br />
                        <span className="text-gradient">Developer</span>
                    </h1>
                    <div className="flex flex-wrap gap-4 text-gray-300 mb-8">
                        <div className="flex items-center gap-2">
                            <Globe className="text-green-400" size={20} />
                            <span>Web</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Cpu className="text-purple-400" size={20} />
                            <span>Mobile</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Cloud className="text-orange-400" size={20} />
                            <span>Cloud</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GitBranch className="text-yellow-400" size={20} />
                            <span>DevOps</span>
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
                        I started my journey with a passion for technology and ended up
                            obsessive about creating new products and helping out small businesses/
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <Link href="#projects" className="btn-primary">
                            View My Work
                        </Link>
                        <Link href="#contact" className="btn-outline">
                            Get In Touch
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <SocialIcon icon={<Github size={20} />} href="https://github.com/ayoubzerouali" label="GitHub" />
                        <SocialIcon icon={<Twitter size={20} />} href="https://x.com/ayoubxzer" label="X (Twitter)" />
                        <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/ayoub-zerouali-9b06821b5/" label="LinkedIn" />
                    </div>
                </div>
                <FloatingIcons />
            </div>

            {/* Floating icons - Right side */}

            {/* Scroll down indicator */}

            <ScrollDown />
        </section>
    );
};

export default HeroSection;
