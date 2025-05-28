"use client"
import { useEffect, useState } from 'react';
//import { useParams, Link } from 'react-router-dom';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import Image from 'next/image';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setLoading(true);
        setTimeout(() => {
            const foundProject = projects.find(p => p.id === id);
            setProject(foundProject || null);
            setLoading(false);
        }, 300);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-primary pt-20">
                <div className="animate-spin h-12 w-12 border-4 border-primary-500 rounded-full border-t-transparent"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-primary pt-20 text-center px-4">
                <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
                <p className="text-gray-400 mb-8">The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                <Link href="/projects" className="btn-primary">
                    <ArrowLeft size={16} className="mr-2" /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background-primary pt-32 pb-20"
            >
                {/* Header */}
                <section className="container-wide mb-16">
                    <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-primary-400 mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{project.title}</h1>
                                <p className="text-gray-400 mb-6">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-sm px-3 py-1 rounded-full bg-background-secondary text-primary-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            <ExternalLink size={16} className="mr-2" /> Live Preview
                                        </Link>
                                    )}

                                    {project.githubUrl && (
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-outline"
                                        >
                                            <Github size={16} className="mr-2" /> View Code
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-lg overflow-hidden shadow-2xl"
                        >
                            <Image
                                width={100}
                                height={100}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Project Details */}
                <section className="container-wide mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6 text-white">Project Overview</h2>
                                <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                                    {project.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>

                                {project.features && (
                                    <div className="mt-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-primary-500 mr-2">•</span>
                                                    <span className="text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="glass-card p-6">
                                <h3 className="text-xl font-semibold mb-4 text-white">Project Details</h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-gray-400 text-sm">Category</p>
                                        <p className="text-white">{project.category}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">Client</p>
                                        <p className="text-white">{project.client || 'Personal Project'}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">Date</p>
                                        <p className="text-white">{project.date}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">Role</p>
                                        <p className="text-white">{project.role || 'Full-stack Developer'}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <section className="container-wide">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h2 className="text-2xl font-semibold mb-8 text-white">Project Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.screenshots.map((screenshot, i) => (
                                    <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            width={100}
                                            height={100}
                                            src={screenshot.url}
                                            alt={screenshot.caption || `Screenshot ${i + 1}`}
                                            className="w-full h-auto"
                                        />
                                        {screenshot.caption && (
                                            <div className="p-4 bg-background-secondary">
                                                <p className="text-gray-300 text-sm">{screenshot.caption}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </section>
                )}
            </motion.div>
        </>
    );
};

export default ProjectDetail;

