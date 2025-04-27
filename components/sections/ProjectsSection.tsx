"use client"
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import Link from 'next/link';

const ProjectsSection = () => {
    // Display only featured projects on the home page
    const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

    return (
        <section id="projects" className="section bg-background-secondary">
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-gradient inline-block mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        Check out some of my recent work. These projects showcase my skills in web and mobile development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mt-12"
                >
                    <Link href="/projects" className="btn-outline group">
                        View All Projects
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
