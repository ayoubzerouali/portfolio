"use client"
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import Image from 'next/image';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group"
        >
            <div className="relative overflow-hidden aspect-video">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/90 to-transparent opacity-70"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs px-2 py-1 rounded bg-background-accent/70 text-primary-300"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-xs px-2 py-1 rounded bg-background-accent/70 text-primary-300">
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                </p>
                <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
                >
                    View project <ArrowUpRight size={16} className="ml-1" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
