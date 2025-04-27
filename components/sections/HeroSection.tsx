import { Cpu, Cloud, Globe, GitBranch } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';
import { Github, Twitter, Linkedin } from 'lucide-react'
import Canvas from '../ui/canvas';
import FloatingIcons from '../ui/floating_icons';
import Link from 'next/link';
import ScrollDown from '../ui/srolldown';
const HeroSection = () => {

    return (
        <section className="h-dvh flex flex-col gap-4 items-center justify-center relative overflow-hidden pt-20">

            <Canvas />
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-background-primary to-background-primary opacity-90 z-0"></div>

            {/* Decorative grid */}

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
                {/* Content - Left side */}
                <div className="lg:col-span-3">

                    <div className="flex items-center space-x-2 mb-4">
                        <div className="h-0.5 w-8 bg-primary-500"></div>
                        <span className="text-primary-400 font-mono">Hello, I&apos;m a</span>
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
                        I specialize in creating high-quality digital experiences using
                        PHP, TypeScript, Golang, and mobile development technologies. With 4 years of
                        experience in web and mobile app development.
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
                        <SocialIcon icon={<Github size={20} />} href="https://github.com" label="GitHub" />
                        <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" label="Twitter" />
                        <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com" label="LinkedIn" />
                    </div>
                </div>
                <FloatingIcons />
            </div>

            {/* Floating icons - Right side */}

            {/* Scroll down indicator */}

            <input type="text" id="email" className="relative z-10 flex text-black bg-white border border-gray-300 focus:ring-primary-500 focus:border-primary-500  rounded-lg p-2.5" />
            <ScrollDown />
        </section>
    );
};

export default HeroSection;
