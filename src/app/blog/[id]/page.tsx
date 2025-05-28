//"use client"

//import { useEffect, useState } from 'react';
//import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/data/blog';
//import { BlogPost as BlogPostType } from '@/types';
import Image from 'next/image';

const BlogPost = async ({ params }: { params: Promise<{ postId: string }> }) => {
    const { postId } = await params
    //const { id } = useParams<{ id: string }>();
    //const [post, setPost] = useState<BlogPostType | null>(null);
    //const [loading, setLoading] = useState(true);

    const post = blogPosts.find(p => p.id === postId);


    //useEffect(() => {
    //    // Simulate loading
    //    setLoading(true);
    //    setTimeout(() => {
    //        const foundPost = blogPosts.find(p => p.id === id);
    //        setPost(foundPost ?? null);
    //        setLoading(false);
    //    }, 300);
    //}, [id]);

    //if (loading) {
    //    return (
    //        <div className="min-h-screen flex items-center justify-center bg-background-primary pt-20">
    //            <div className="animate-spin h-12 w-12 border-4 border-primary-500 rounded-full border-t-transparent"></div>
    //        </div>
    //    );
    //}

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-primary pt-20 text-center px-4">
                <h2 className="text-3xl font-bold text-white mb-4">Article Not Found</h2>
                <p className="text-gray-400 mb-8">The article you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                <Link href="/blog" className="btn-primary">
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
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
                <div className="container-tight">
                    <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary-400 mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to blog
                    </Link>

                    {/* Article Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-sm px-3 py-1 rounded-full bg-background-secondary text-primary-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">{post.title}</h1>

                        <div className="flex flex-wrap items-center text-gray-400 text-sm mb-8">
                            <div className="flex items-center mr-6 mb-2">
                                <User size={16} className="mr-2" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center mr-6 mb-2">
                                <Calendar size={16} className="mr-2" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <Clock size={16} className="mr-2" />
                                <span>{post.readTime} min read</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-lg overflow-hidden shadow-2xl mb-12"
                    >
                        <Image
                            width={1000}
                            height={1000}
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6"
                    >
                        {post.content.map((section, i: number) => (
                            <div key={i} className="mb-8">
                                {section.type === 'paragraph' && <p>{section.content}</p>}

                                {section.type === 'heading' && (
                                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">{section.content}</h2>
                                )}

                                {section.type === 'list' && (
                                    <ul className="space-y-2 my-4">
                                        {section.items.map((item, j) => (
                                            <li key={j} className="flex items-start">
                                                <span className="text-primary-500 mr-2">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.type === 'code' && (
                                    <div className="bg-background-accent rounded-md p-4 my-6 overflow-x-auto">
                                        <pre className="text-gray-300 font-mono text-sm">
                                            <code>{section.content}</code>
                                        </pre>
                                    </div>
                                )}

                                {section.type === 'image' && (
                                    <figure className="my-8">
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={section.url}
                                            alt={section.caption ?? ''}
                                            className="rounded-md w-full h-auto"
                                        />
                                        {section.caption && (
                                            <figcaption className="text-center text-gray-500 mt-2">
                                                {section.caption}
                                            </figcaption>
                                        )}
                                    </figure>
                                )}

                                {section.type === 'quote' && (
                                    <blockquote className="border-l-4 border-primary-500 pl-4 py-1 my-6">
                                        <p className="italic text-gray-400">{section.content}</p>
                                        {section.author && (
                                            <cite className="text-gray-500 mt-2 block">— {section.author}</cite>
                                        )}
                                    </blockquote>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default BlogPost;

