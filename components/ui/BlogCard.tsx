"use client"
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../../types';
import Image from 'next/image';

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group"
        >
            <div className="relative overflow-hidden aspect-video">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    height={100}
                    width={100}
                    className="w-full h-full object-cover transition-transform 
                    duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-400/90
                to-transparent opacity-70"></div>
            </div>

            <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                    <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime} min read
                    </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">
                    <Link href={`/blog/${post.id}`} className="hover:text-cyan-400
                    transition-colors">
                        {post.title}
                    </Link>
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="flex items-center mt-4">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs px-2 py-1 rounded bg-cyan-200/80 
                                text-black font-semibold"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;
