"use client"
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import BlogCard from '../ui/BlogCard';
import { blogPosts } from '../../data/blog';

const BlogSection = () => {
    // Display only latest blog posts on the home page
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="section bg-background-primary">
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-gradient inline-block mb-4">Latest Articles</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        I write about web development, software engineering, and my experiences as a developer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mt-12"
                >
                    <Link href="/blog" className="btn-outline group">
                        Read All Articles
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
