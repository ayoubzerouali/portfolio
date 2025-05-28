"use client"
import { useState } from 'react';
import { motion } from 'motion/react';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

const ProjectsPage = () => {
    const [filter, setFilter] = useState('all');

    // Get unique categories from projects
    const categories = ['all', ...new Set(projects.flatMap(p => p.category))];

    // Filter projects based on selected category
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Projects Header */}
                <section className="pt-32 pb-16 ">
                    <div className="container-wide">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">My Projects</h1>
                            <p className="text-gray-400 max-w-3xl mx-auto mb-12">
                                Explore my portfolio of web and mobile development projects. Each project demonstrates
                                different skills and technologies.
                            </p>

                            {/* Category filter */}
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setFilter(category)}
                                        className={`px-4 py-2 rounded-md transition-all cursor-pointer ${filter === category
                                            ? 'bg-blue-800'
                                            : 'bg-gray-800 text-gray-300 hover:bg-blue-700/60'
                                            }`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-gray-400">No projects found in this category.</p>
                            </div>
                        )}
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default ProjectsPage;

